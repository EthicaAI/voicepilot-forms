#!/usr/bin/env node

/**
 * One-time migration script: converts FIELD-INFO.md → bridge YAML.
 *
 * Data sources:
 *   - voicepilot-forms/docs/FIELD-INFO.md  (info text for 128 fields)
 *   - FreeTC DEEPLINK-TO-SCHEMA-MAP.md     (field ID mappings)
 *   - voicepilot-forms/docs/NON-RPA-FIELDS.md (17 VoicePilot-only fields)
 *
 * Output: bridge/CA/RPA/v2024/fields.yaml
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import yaml from "js-yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// --- Read source files ---
const fieldInfoMd = readFileSync(
  resolve(ROOT, "docs/FIELD-INFO.md"),
  "utf8"
);

// --- Section name mapping (human-readable → snake_case) ---
const SECTION_MAP = {
  "Sellers & Agents": "sellers_agents",
  "Seller": "sellers_agents",
  "Buyer Brokerage / Buyer Agent": "sellers_agents",
  "Listing Brokerage / Listing Agent": "sellers_agents",
  "Buyers (Supports Multiple Buyers)": "buyers",
  "Buyer 1": "buyers",
  "Buyer 2": "buyers",
  "Buyer 3": "buyers",
  "Buyer 4": "buyers",
  "Price & Deposits": "price_deposits",
  "Purchase": "price_deposits",
  "Initial Deposit (EMD)": "price_deposits",
  "Escrow": "price_deposits",
  "Increased Deposit": "price_deposits",
  "Funds": "price_deposits",
  "Appraisal": "price_deposits",
  "Seller Credit": "price_deposits",
  "Financing": "financing",
  "Financing Type": "financing",
  "Loan Details": "financing",
  "Buyer Qualification": "financing",
  "Closing & Possession": "closing_possession",
  "Possession": "closing_possession",
  "Rent Back": "closing_possession",
  "Contingencies": "contingencies",
  "Periods": "contingencies",
  "Inspection": "contingencies",
  "Conditional / Waiver": "contingencies",
  "Verification": "contingencies",
  "Property Information": "property_information",
  "Items & Personal Property": "items_personal_property",
  "HOA": "hoa",
  "Occupancy & Buyer Intent": "occupancy_buyer_intent",
  "Home Warranty": "home_warranty",
  "Title & Escrow": "title_escrow",
  "Disclosures, Reports & Inspections (Paid By)": "disclosures_inspections",
  "Transfer Taxes": "transfer_taxes",
  "Other Fees": "other_fees",
  "Contract Clauses (Yes/No)": "contract_clauses",
  "Additional Terms": "additional_terms",
  "Escalation Clause": "escalation_clause",
  "BRBC (Buyer Representation / Buyer Broker Compensation)": "brbc",
};

// --- Deep link key mapping (label → camelCase deeplink key) ---
// Built from DEEPLINK-TO-SCHEMA-MAP.md
const DEEPLINK_KEY_MAP = {
  "Seller Name": "sellerName",
  "Seller Email": "sellerEmail",
  "Seller Phone": "sellerPhone",
  "Buyer Brokerage": "buyerBrokerage",
  "Buyer Brokerage DRE #": "buyerBrokerageDre",
  "Buyer Agent": "buyerAgent",
  "Buyer Agent License": "buyerAgentLicense",
  "Buyer Agent Phone": "buyerAgentPhone",
  "Buyer Agent Email": "buyerAgentEmail",
  "Listing Brokerage": "listingBrokerage",
  "Listing Agent": "listingAgent",
  "Listing Agent License": "listingAgentLicense",
  "Listing Agent Phone": "listingAgentPhone",
  "Listing Agent Email": "listingAgentEmail",
  "Buyer 1 Name": "buyer1Name",
  "Buyer 1 Entity Type": "buyer1EntityType",
  "Buyer 2 Name": "buyer2Name",
  "Buyer 2 Entity Type": "buyer2EntityType",
  "Buyer 3 Name": "buyer3Name",
  "Buyer 3 Entity Type": "buyer3EntityType",
  "Buyer 4 Name": "buyer4Name",
  "Buyer 4 Entity Type": "buyer4EntityType",
  "Offer Price": "offerPrice",
  "Initial Deposit ($)": "initialDeposit",
  "Initial Deposit (%)": "initialDepositPercent",
  "Initial Deposit Due Within": "initialDepositDueWithin",
  "Deposit Method": "depositMethod",
  "Initial Deposit Held By": "initialDepositHeldBy",
  "Escrow Holder": "escrowHolder",
  "Escrow Contact": "escrowContact",
  "Increased Deposit Amount": "increasedDepositAmount",
  "Increased Deposit Due Within": "increasedDepositDueWithin",
  "Funds Source": "fundsSource",
  "Proof of Funds Attached": "proofOfFundsAttached",
  "Appraisal Minimum Type": "appraisalMinimumType",
  "Seller Credit ($)": "sellerCredit",
  "Seller Credit (%)": "sellerCreditPercent",
  "Seller Credit Purpose": "sellerCreditPurpose",
  "Seller Credit Notes": "sellerCreditNotes",
  "Financing Type": "financingType",
  "Cash Offer": "cashOffer",
  "Down Payment ($)": "downPayment",
  "Down Payment (%)": "downPaymentPercent",
  "Loan Amount": "loanAmount",
  "Interest Rate (%)": "interestRate",
  "Interest Rate Type": "interestRateType",
  "Loan Points": "loanPoints",
  "Pre-approval Attached": "preApprovalAttached",
  "Pre-qualification Status": "preQualificationStatus",
  "Close of Escrow (days)": "closeOfEscrowDays",
  "Acceptance Date": "acceptanceDate",
  "Possession Timing": "possessionTiming",
  "Possession at Close": "possessionAtClose",
  "Rent Back Requested": "rentBackRequested",
  "Rent Back Days": "rentBackDays",
  "Seller Post-Possession Days": "sellerPostPossessionDays",
  "Post-Possession Daily Rate": "postPossessionDailyRate",
  "Loan Contingency Period": "loanContingencyPeriod",
  "Appraisal Contingency Period": "appraisalContingencyPeriod",
  "Investigation Period": "investigationPeriod",
  "Insurance Contingency": "insuranceContingency",
  "Seller Documents Review": "sellerDocumentsReview",
  "Title Report Review": "titleReportReview",
  "HOA Disclosure Review": "hoaDisclosureReview",
  "Leased Items Review": "leasedItemsReview",
  "Informational Access Period": "informationalAccessPeriod",
  "Inspection Types": "inspectionTypes",
  "Sale of Property Contingency": "saleOfPropertyContingency",
  "Contingency Waived at Offer": "contingencyWaivedAtOffer",
  "Verification of Cash": "verificationOfCash",
  "Verification of Down Payment": "verificationOfDownPayment",
  "Final Verification of Funds": "finalVerificationOfFunds",
  "City": "city",
  "State": "state",
  "ZIP Code": "zipCode",
  "County": "county",
  "APN": "apn",
  "Intended Use": "intendedUse",
  "Included Items": "includedItems",
  "Excluded Items": "excludedItems",
  "Personal Property Included": "personalPropertyIncluded",
  "HOA Name": "hoaName",
  "HOA Dues": "hoaDues",
  "HOA Dues Frequency": "hoaDuesFrequency",
  "TOPA Applies": "topaApplies",
  "Buyer Intent": "buyerIntent",
  "Tenant Status": "tenantStatus",
  "Home Warranty Waived": "homeWarrantyWaived",
  "Home Warranty Paid By": "homeWarrantyPaidBy",
  "Home Warranty Cost": "homeWarrantyCost",
  "Home Warranty Company": "homeWarrantyCompany",
  "Title Company": "titleCompany",
  "Vesting": "vesting",
  "Title Cost Split": "titleCostSplit",
  "Preliminary Title Report Reviewed": "preliminaryTitleReportReviewed",
  "Title Insurance Paid By": "titleInsurancePaidBy",
  "Escrow Fees Paid By": "escrowFeesPaidBy",
  "NHD Paid By": "nhdPaidBy",
  "Home Inspection Paid By": "homeInspectionPaidBy",
  "Termite Inspection Paid By": "termiteInspectionPaidBy",
  "Wildfire Disclosure Paid By": "wildfireDisclosurePaidBy",
  "Safety Device Compliance Paid By": "safetyDeviceCompliancePaidBy",
  "Government Inspections Paid By": "governmentInspectionsPaidBy",
  "Government Corrections Paid By": "governmentCorrectionsPaidBy",
  "Lender Title Policy Paid By": "lenderTitlePolicyPaidBy",
  "County Transfer Tax Paid By": "countyTransferTaxPaidBy",
  "City Transfer Tax Paid By": "cityTransferTaxPaidBy",
  "Other Fee 1 Description": "otherFee1Description",
  "Other Fee 1 Paid By": "otherFee1PaidBy",
  "Other Fee 2 Description": "otherFee2Description",
  "Other Fee 2 Paid By": "otherFee2PaidBy",
  "Liquidated Damages": "liquidatedDamages",
  "Arbitration Clause": "arbitrationClause",
  "All Inclusions Stay With Property": "allInclusionsStayWithProperty",
  "Buyer Right to Inspect": "buyerRightToInspect",
  "Compliance With Local Ordinances": "complianceWithLocalOrdinances",
  "Time Is of Essence": "timeIsOfEssence",
  "Additional Terms": "additionalTerms",
  "Escalation Increment": "escalationIncrement",
  "Maximum Price Cap": "maximumPriceCap",
  "Escalation Clause Text": "escalationClauseText",
  "Compensation Type": "compensationType",
  "Compensation ($)": "compensationAmount",
  "Compensation (%)": "compensationPercent",
  "Compensation Payer": "compensationPayer",
  "Retainer Amount": "retainerAmount",
  "Retainer Credited at Close": "retainerCreditedAtClose",
  "Exclusive Representation": "exclusiveRepresentation",
  "BRBC Expiration Date": "brbcExpirationDate",
  "BRBC Executed": "brbcExecuted",
  "BRBC Executed Date": "brbcExecutedDate",
  "Buyer Brokerage DRE # (BRBC)": "buyerBrokerageDreBrbc",
  "Compensation Notes": "compensationNotes",
};

// --- Schema key mapping (label → schema key) ---
// Built from DEEPLINK-TO-SCHEMA-MAP.md
const SCHEMA_KEY_MAP = {
  "Seller Name": "seller_entity_names",
  "Buyer Brokerage": "buyer_brokerage_firm",
  "Buyer Brokerage DRE #": "buyer_agent_dre_license",
  "Buyer Agent": "buyer_agent_name",
  "Buyer Agent License": "buyer_agent_dre_license",
  "Buyer Agent Phone": "buyer_agent_phone",
  "Buyer Agent Email": "buyer_agent_email",
  "Listing Brokerage": "seller_brokerage_firm",
  "Listing Agent": "seller_agent_name",
  "Listing Agent License": "seller_agent_dre_license",
  "Listing Agent Phone": "seller_agent_phone",
  "Listing Agent Email": "seller_agent_email",
  "Buyer 1 Name": "buyers_0_name",
  "Buyer 1 Entity Type": "buyers_0_buyer_type",
  "Buyer 2 Name": "buyers_1_name",
  "Buyer 2 Entity Type": "buyers_1_buyer_type",
  "Buyer 3 Name": "buyers_2_name",
  "Buyer 3 Entity Type": "buyers_2_buyer_type",
  "Buyer 4 Name": "buyers_3_name",
  "Buyer 4 Entity Type": "buyers_3_buyer_type",
  "Offer Price": "offer_price",
  "Initial Deposit ($)": "initial_deposit",
  "Initial Deposit Due Within": "initial_deposit_days",
  "Deposit Method": "deposit_method",
  "Initial Deposit Held By": "initial_deposit_held_by",
  "Escrow Holder": "escrow_holder",
  "Escrow Contact": "escrow_holder_contact",
  "Increased Deposit Amount": "increased_deposit",
  "Increased Deposit Due Within": "increased_deposit_days",
  "Funds Source": "funds_source",
  "Proof of Funds Attached": "proof_of_funds_attached",
  "Appraisal Minimum Type": "appraisal_minimum_type",
  "Seller Credit ($)": "seller_credit_requested",
  "Seller Credit Purpose": "seller_credit_purpose",
  "Seller Credit Notes": "seller_credit_notes",
  "Financing Type": "financing_type",
  "Down Payment (%)": "down_payment_percent",
  "Loan Amount": "loan_amount",
  "Interest Rate (%)": "interest_rate",
  "Interest Rate Type": "interest_rate_type",
  "Loan Points": "loan_points",
  "Pre-approval Attached": "preapproval_attached",
  "Pre-qualification Status": "prequalification_status",
  "Close of Escrow (days)": "close_of_escrow_days",
  "Acceptance Date": "acceptance_date",
  "Possession Timing": "possession_timing",
  "Possession at Close": "possession_at_close",
  "Rent Back Requested": "rent_back_requested",
  "Rent Back Days": "rent_back_days",
  "Seller Post-Possession Days": "seller_post_possession_days",
  "Post-Possession Daily Rate": "post_possession_daily_rate",
  "Loan Contingency Period": "loan_contingency_days",
  "Appraisal Contingency Period": "appraisal_contingency_days",
  "Investigation Period": "investigation_period_days",
  "Insurance Contingency": "insurance_contingency_days",
  "Seller Documents Review": "seller_documents_review_days",
  "Title Report Review": "title_report_review_days",
  "HOA Disclosure Review": "hoa_disclosure_review_days",
  "Leased Items Review": "leased_items_review_days",
  "Informational Access Period": "informational_access_days",
  "Inspection Types": "inspection_types",
  "Sale of Property Contingency": "sale_of_property_contingency",
  "Contingency Waived at Offer": "contingency_waived_at_offer",
  "Verification of Cash": "verification_cash_days",
  "Verification of Down Payment": "verification_down_payment_days",
  "Final Verification of Funds": "final_verification_days",
  "City": "property_city",
  "ZIP Code": "property_zip",
  "County": "property_county",
  "APN": "apn",
  "Intended Use": "intended_use",
  "Included Items": "included_items",
  "Excluded Items": "excluded_items",
  "Personal Property Included": "personal_property_included",
  "HOA Name": "hoa_name",
  "HOA Dues": "hoa_dues",
  "HOA Dues Frequency": "hoa_dues_frequency",
  "TOPA Applies": "topa_applies",
  "Buyer Intent": "buyer_intent",
  "Tenant Status": "tenant_status",
  "Home Warranty Waived": "home_warranty_waived",
  "Home Warranty Paid By": "home_warranty_paid_by",
  "Home Warranty Cost": "home_warranty_cost",
  "Home Warranty Company": "home_warranty_company",
  "Title Company": "title_company",
  "Vesting": "vesting",
  "Title Cost Split": "title_cost_split",
  "Preliminary Title Report Reviewed": "preliminary_title_report_reviewed",
  "Title Insurance Paid By": "title_insurance_paid_by",
  "Escrow Fees Paid By": "escrow_fees_paid_by",
  "NHD Paid By": "nhd_paid_by",
  "Home Inspection Paid By": "home_inspection_paid_by",
  "Wildfire Disclosure Paid By": "wildfire_disclosure_paid_by",
  "Safety Device Compliance Paid By": "safety_device_compliance_paid_by",
  "Government Inspections Paid By": "govt_inspections_paid_by",
  "Government Corrections Paid By": "govt_corrections_paid_by",
  "Lender Title Policy Paid By": "lender_title_policy_paid_by",
  "County Transfer Tax Paid By": "county_transfer_tax_paid_by",
  "City Transfer Tax Paid By": "city_transfer_tax_paid_by",
  "Other Fee 1 Description": "other_fee_1_description",
  "Other Fee 1 Paid By": "other_fee_1_paid_by",
  "Other Fee 2 Description": "other_fee_2_description",
  "Other Fee 2 Paid By": "other_fee_2_paid_by",
  "Liquidated Damages": "liquidated_damages",
  "Arbitration Clause": "arbitration_clause",
  "All Inclusions Stay With Property": "all_inclusions_stay_with_property",
  "Buyer Right to Inspect": "buyer_right_to_inspect",
  "Compliance With Local Ordinances": "compliance_with_local_ordinances",
  "Time Is of Essence": "time_is_of_essence",
  "Additional Terms": "additional_terms",
  "Compensation ($)": "buyer_agent_compensation_amount",
  "Compensation (%)": "buyer_agent_compensation_percent",
  "Compensation Payer": "buyer_agent_compensation_payer",
  "BRBC Executed": "brbc_executed",
  "Buyer Brokerage DRE # (BRBC)": "buyer_agent_dre_license",
};

// --- Classification map ---
// Fields that are NOT document_bound_rpa
const CLASSIFICATION_OVERRIDES = {
  // VoicePilot additions (+ fields)
  "Seller Name": "voicepilot_addition",
  "Seller Email": "workflow_only",
  "Seller Phone": "workflow_only",
  "Initial Deposit (%)": "derived",
  "Seller Credit (%)": "derived",
  "Down Payment (%)": "derived",
  "Down Payment ($)": "derived",
  "Cash Offer": "derived",
  "Termite Inspection Paid By": "document_bound_section_r",
  "State": "routing",
  "Preliminary Title Report Reviewed": "workflow_only",
  "Insurance Contingency": "document_bound_section_r",
  // Escalation clause fields
  "Escalation Increment": "voicepilot_addition",
  "Maximum Price Cap": "voicepilot_addition",
  "Escalation Clause Text": "voicepilot_addition",
  // BRBC fields
  "Compensation Type": "derived",
  "Retainer Amount": "document_bound_brbc",
  "Retainer Credited at Close": "document_bound_brbc",
  "Exclusive Representation": "document_bound_brbc",
  "BRBC Expiration Date": "document_bound_brbc",
  "BRBC Executed Date": "document_bound_brbc",
  "Compensation Notes": "document_bound_brbc",
  "Compensation ($)": "document_bound_brbc",
  "Compensation (%)": "document_bound_brbc",
  "Compensation Payer": "document_bound_brbc",
  "BRBC Executed": "document_bound_brbc",
  "Buyer Brokerage DRE # (BRBC)": "document_bound_brbc",
};

// --- Derived-from map ---
const DERIVED_FROM_MAP = {
  "Initial Deposit (%)": "initial_deposit",
  "Seller Credit (%)": "seller_credit",
  "Down Payment (%)": "down_payment",
  "Down Payment ($)": "down_payment_pct",
  "Cash Offer": "financing_type",
};

// --- Field type inference ---
function inferFieldType(label) {
  const l = label.toLowerCase();
  if (l.includes("($)") || l.includes("cost") || l.includes("amount") || l.includes("price") || l.includes("daily rate")) return "currency";
  if (l.includes("(%)") || l.includes("percent")) return "percentage";
  if (l.includes("email")) return "email";
  if (l.includes("phone")) return "phone";
  if (l.includes("date")) return "date";
  if (l.includes("license") || l.includes("dre #")) return "license";
  if (l.includes("days") || l.includes("period") || l.includes("within") || l.includes("review")) return "number";
  if (l.includes("type") || l.includes("method") || l.includes("timing") || l.includes("frequency") || l.includes("paid by") || l.includes("payer") || l.includes("split") || l.includes("status") || l.includes("intent") || l.includes("use") || l.includes("held by") || l.includes("minimum type") || l.includes("source")) return "select";
  if (l.includes("waived") || l.includes("attached") || l.includes("requested") || l.includes("applies") || l.includes("executed") || l.includes("at close") || l.includes("contingency") && !l.includes("period") || l.includes("damages") || l.includes("arbitration") || l.includes("all inclusions") || l.includes("right to inspect") || l.includes("compliance") || l.includes("time is of") || l.includes("credited") || l.includes("exclusive") || l.includes("possession at close") || l.includes("cash offer")) return "boolean";
  if (l.includes("terms") || l.includes("text") || l.includes("notes") || l.includes("items") || l.includes("types")) return "textarea";
  return "text";
}

// --- Explicit ID overrides for fields that collide ---
const ID_OVERRIDES = {
  "Initial Deposit ($)": "initial_deposit",
  "Initial Deposit (%)": "initial_deposit_pct",
  "Seller Credit ($)": "seller_credit",
  "Seller Credit (%)": "seller_credit_pct",
  "Down Payment ($)": "down_payment",
  "Down Payment (%)": "down_payment_pct",
  "Compensation ($)": "compensation_amount",
  "Compensation (%)": "compensation_pct",
  "Interest Rate (%)": "interest_rate",
  "Buyer Brokerage DRE #": "buyer_brokerage_dre",
  // BRBC section has a duplicate "Buyer Brokerage DRE #"
  "Buyer Brokerage DRE # (BRBC)": "brbc_buyer_brokerage_dre",
};

// --- Label to stable ID ---
function labelToId(label) {
  const cleanLabel = label
    .replace(/\s*`\+`/g, "")
    .replace(/\s*`\(calculated\)`/g, "")
    .trim();

  if (ID_OVERRIDES[cleanLabel]) return ID_OVERRIDES[cleanLabel];

  return cleanLabel
    .replace(/[()%$#]/g, "")
    .replace(/\//g, "_")
    .replace(/[^a-zA-Z0-9\s_-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "");
}

// --- Parse RPA reference from description ---
function parseRpaReference(firstLine) {
  // Matches patterns like "RPA Section 3A (Initial Deposit)"
  const match = firstLine.match(/RPA\s+(?:Section\s+)?([^\s(]+)\s*(?:\(([^)]+)\))?/i);
  if (match) {
    return {
      section: match[1],
      section_label: match[2] || match[1],
    };
  }
  return null;
}

// --- Parse FIELD-INFO.md ---
function parseFieldInfo(md) {
  const lines = md.split("\n");
  const entries = [];
  let currentSection = null;
  let currentLabel = null;
  let currentLines = [];
  let isVoicePilotAddition = false;
  const seenLabels = new Set();

  function flush() {
    if (!currentLabel || currentLines.length === 0) return;

    const cleanLabel = currentLabel
      .replace(/\s*`\+`/g, "")
      .replace(/\s*`\(calculated\)`/g, "")
      .trim();

    const body = currentLines.join("\n").trim();
    const bodyLines = body.split("\n");

    // First line is either an RPA reference or "VoicePilot Addition"
    const firstLine = bodyLines[0] || "";
    const isVP = firstLine.includes("VoicePilot Addition");
    const rpaRef = isVP ? null : parseRpaReference(firstLine);

    // The description text starts after the first line (RPA reference)
    const descText = bodyLines.slice(1).join("\n").trim() || bodyLines[0];

    // Build summary: first sentence of the description
    const fullDesc = isVP ? bodyLines.slice(1).join(" ").trim() : bodyLines.slice(1).join(" ").trim();
    let summary = "";
    const sentenceMatch = fullDesc.match(/^(.+?[.!?])\s/);
    if (sentenceMatch) {
      summary = sentenceMatch[1];
    } else {
      summary = fullDesc.length > 200 ? fullDesc.substring(0, 197) + "..." : fullDesc;
    }

    // If summary is too long, truncate at 500 chars
    if (summary.length > 500) {
      summary = summary.substring(0, 497) + "...";
    }

    const detail = fullDesc || summary;

    // Disambiguate duplicate labels by tracking seen ones
    let lookupLabel = cleanLabel;
    if (seenLabels.has(cleanLabel)) {
      // Use section-qualified label for lookups (e.g. "Buyer Brokerage DRE # (BRBC)")
      lookupLabel = `${cleanLabel} (BRBC)`;
    }
    seenLabels.add(cleanLabel);

    const id = ID_OVERRIDES[lookupLabel] || labelToId(currentLabel);
    const classification = CLASSIFICATION_OVERRIDES[lookupLabel] || CLASSIFICATION_OVERRIDES[cleanLabel] ||
      (isVP || isVoicePilotAddition ? "voicepilot_addition" : "document_bound_rpa");

    // RPA context line
    let rpaContext;
    if (rpaRef) {
      rpaContext = `RPA Section ${rpaRef.section}` + (rpaRef.section_label !== rpaRef.section ? ` (${rpaRef.section_label})` : "");
    } else if (isVP) {
      rpaContext = "VoicePilot Addition \u2014 not on the C.A.R. RPA";
    } else {
      rpaContext = firstLine.trim();
    }

    // Source block
    let source = null;
    if (rpaRef && !["voicepilot_addition", "workflow_only", "derived", "routing"].includes(classification)) {
      source = {
        form: "CA-RPA",
        form_version: "2024",
        section: rpaRef.section,
        section_label: rpaRef.section_label,
        paragraph: null,
        field_name: cleanLabel,
      };
    }

    const entry = {
      id,
      label: cleanLabel,
      section: currentSection,
      field_type: inferFieldType(cleanLabel),
      source,
      info: {
        summary,
        detail: detail.length < 20 ? detail + " (see RPA for details)" : detail,
        rpa_context: rpaContext,
      },
      classification,
      derived_from: DERIVED_FROM_MAP[lookupLabel] || DERIVED_FROM_MAP[cleanLabel] || null,
      schema_key: SCHEMA_KEY_MAP[lookupLabel] || SCHEMA_KEY_MAP[cleanLabel] || null,
      deeplink_key: DEEPLINK_KEY_MAP[lookupLabel] || DEEPLINK_KEY_MAP[cleanLabel] || null,
      added_in: "1.0.0",
      deprecated_in: null,
      tags: buildTags(classification, cleanLabel),
    };

    entries.push(entry);
  }

  for (const line of lines) {
    // Top-level section: ## N. Section Name
    const sectionMatch = line.match(/^## \d+\.\s+(.+)/);
    if (sectionMatch) {
      flush();
      const sectionName = sectionMatch[1].trim();
      currentSection = SECTION_MAP[sectionName] || labelToId(sectionName);
      currentLabel = null;
      currentLines = [];
      isVoicePilotAddition = false;
      continue;
    }

    // Field heading: #### Field Name  (possibly with `+` and `(calculated)`)
    const fieldMatch = line.match(/^#### (.+)/);
    if (fieldMatch) {
      flush();
      currentLabel = fieldMatch[1].trim();
      isVoicePilotAddition = currentLabel.includes("`+`");
      currentLines = [];
      continue;
    }

    // Skip subsection headings (### ...) and block-level markers
    if (line.match(/^### /) || line.match(/^---/) || line.match(/^> /)) {
      continue;
    }

    // Accumulate body text for current field
    if (currentLabel !== null) {
      currentLines.push(line);
    }
  }

  // Flush last entry
  flush();

  return entries;
}

function buildTags(classification, label) {
  const tags = [];
  if (classification === "voicepilot_addition") tags.push("voicepilot_addition");
  if (classification === "derived") tags.push("derived", "calculated");
  if (classification === "workflow_only") tags.push("workflow_only");
  if (classification === "routing") tags.push("routing");
  if (classification === "document_bound_rpa") tags.push("rpa");
  if (classification === "document_bound_brbc") tags.push("brbc");
  if (classification === "document_bound_section_r") tags.push("section_r");
  return tags;
}

// --- Run migration ---
const entries = parseFieldInfo(fieldInfoMd);
console.log(`Parsed ${entries.length} entries from FIELD-INFO.md`);

// Write YAML
const yamlOutput = yaml.dump(entries, {
  lineWidth: 120,
  noRefs: true,
  quotingType: '"',
  forceQuotes: false,
});

const outputPath = resolve(ROOT, "bridge/CA/RPA/v2024/fields.yaml");
writeFileSync(outputPath, yamlOutput);
console.log(`Wrote ${outputPath}`);

// Print section breakdown
const sectionCounts = {};
for (const e of entries) {
  sectionCounts[e.section] = (sectionCounts[e.section] || 0) + 1;
}
console.log("\nSection breakdown:");
for (const [section, count] of Object.entries(sectionCounts)) {
  console.log(`  ${section}: ${count}`);
}

// Print classification breakdown
const classCounts = {};
for (const e of entries) {
  classCounts[e.classification] = (classCounts[e.classification] || 0) + 1;
}
console.log("\nClassification breakdown:");
for (const [cls, count] of Object.entries(classCounts)) {
  console.log(`  ${cls}: ${count}`);
}
