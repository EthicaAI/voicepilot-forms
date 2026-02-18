---
layout: default
title: "Deep Link RPA Field Inventory"
---

# California Residential Purchase Agreement (RPA)
## Deep Link Field Inventory, VoicePilot

**Version:** 1.0.0  |  **Updated:** 2026-02-18  |  [Changelog](./CHANGELOG)  |  [Screenshots](https://github.com/EthicaAI/voicepilot-forms/tree/main/screenshots/v1.0.0)  |  [Removals](./REMOVALS)  |  [Non-RPA Fields](./NON-RPA-FIELDS)

This document inventories all fields on the VoicePilot deep link offer form. The form is modeled after the C.A.R. RPA but is a distinct product artifact with its own field set. Fields that go beyond the RPA are marked with a `+` symbol.

**Legend:**
- Fields listed without annotation are standard RPA fields
- `+` = Not on the C.A.R. RPA (VoicePilot addition)
- `(calculated)` = Convenience field derived from other values

---

## 1. Sellers & Agents

### Seller
- Seller Name `+`
- Seller Email `+`
- Seller Phone `+`

> **Note:** The RPA does not include standalone seller contact fields in the offer body. Seller information is filled in at acceptance. These fields are kept for agent workflow convenience.

### Buyer Brokerage / Buyer Agent
- Buyer Brokerage
- Buyer Brokerage DRE #
- Buyer Agent
- Buyer Agent License
- Buyer Agent Phone
- Buyer Agent Email

### Listing Brokerage / Listing Agent
- Listing Brokerage
- Listing Agent
- Listing Agent License
- Listing Agent Phone
- Listing Agent Email

---

## 2. Buyers (Supports Multiple Buyers)

### Buyer 1
- Buyer 1 Name
- Buyer 1 Entity Type
  - Individual
  - Trust
  - LLC
  - Corporation
  - Partnership

### Buyer 2
- Buyer 2 Name
- Buyer 2 Entity Type
  - Individual
  - Trust
  - LLC
  - Corporation
  - Partnership

### Buyer 3
- Buyer 3 Name
- Buyer 3 Entity Type
  - Individual
  - Trust
  - LLC
  - Corporation
  - Partnership

### Buyer 4
- Buyer 4 Name
- Buyer 4 Entity Type
  - Individual
  - Trust
  - LLC
  - Corporation
  - Partnership

---

## 3. Price & Deposits

### Purchase
- Offer Price

### Initial Deposit (EMD)
- Initial Deposit ($)
- Initial Deposit (%) `(calculated)`
- Initial Deposit Due Within
- Deposit Method
  - Wire Transfer
  - Check
  - Cashier's Check
- Initial Deposit Held By
  - Escrow Holder
  - Seller's Broker
  - Other

### Escrow
- Escrow Holder
- Escrow Contact

### Increased Deposit
- Increased Deposit Amount
- Increased Deposit Due Within

### Funds
- Funds Source
  - Cash
  - Loan
  - Gift
  - Sale of Property
  - Other
- Proof of Funds Attached (Yes/No)

### Appraisal
- Appraisal Minimum Type
  - Purchase Price
  - Fixed Amount

### Seller Credit
- Seller Credit ($)
- Seller Credit (%) `(calculated)`
- Seller Credit Purpose
- Seller Credit Notes

---

## 4. Financing

### Financing Type
- Cash
- Conventional
- FHA
- VA
- USDA
- Seller Financing
- Other

- Cash Offer (Yes/No)

### Loan Details
- Down Payment ($)
- Down Payment (%) `(calculated)`
- Loan Amount
- Interest Rate (%)
- Interest Rate Type
  - Fixed
  - Adjustable
- Loan Points

### Buyer Qualification
- Pre-approval Attached (Yes/No)
- Pre-qualification Status
  - Pre-qualified
  - Pre-approved
  - Fully Underwritten

---

## 5. Closing & Possession

- Close of Escrow (days)
- Acceptance Date

### Possession
- Possession Timing
  - At Close of Escrow
  - After Close
  - To Be Determined
- Possession at Close (Yes/No)

### Rent Back
- Rent Back Requested (Yes/No)
- Rent Back Days
- Seller Post-Possession Days
- Post-Possession Daily Rate

---

## 6. Contingencies

### Periods
- Loan Contingency Period
- Appraisal Contingency Period
- Investigation Period
- Insurance Contingency
- Seller Documents Review
- Title Report Review
- HOA Disclosure Review
- Leased Items Review
- Informational Access Period

### Inspection
- Inspection Types (comma-separated)

### Conditional / Waiver
- Sale of Property Contingency (Yes/No)
- Contingency Waived at Offer (Yes/No)

### Verification
- Verification of Cash
- Verification of Down Payment
- Final Verification of Funds

---

## 7. Property Information

- City
- State
- ZIP Code
- County
- APN
- Intended Use
  - Primary Residence
  - Vacation Home
  - Investment Property

---

## 8. Items & Personal Property

- Included Items
- Excluded Items
- Personal Property Included

---

## 9. HOA

- HOA Name
- HOA Dues
- HOA Dues Frequency
  - Monthly
  - Quarterly
  - Annually
- TOPA Applies (Yes/No)

---

## 10. Occupancy & Buyer Intent

- Buyer Intent
  - Primary Residence
  - Secondary Home
  - Investment Property
  - Other
- Tenant Status
  - Vacant
  - Occupied, Vacating at Close
  - Occupied, Remaining After Close
  - Seller Occupied

---

## 11. Home Warranty

- Home Warranty Waived (Yes/No)
- Home Warranty Paid By
  - Buyer
  - Seller
  - Split
  - Other
- Home Warranty Cost
- Home Warranty Company

---

## 12. Title & Escrow

- Title Company
- Vesting
- Title Cost Split
  - Buyer Pays
  - Seller Pays
  - 50/50 Split
- Preliminary Title Report Reviewed (Yes/No)
- Title Insurance Paid By
  - Buyer
  - Seller
  - Split
  - Other
- Escrow Fees Paid By
  - Buyer
  - Seller
  - Split
  - Other

---

## 13. Disclosures, Reports & Inspections (Paid By)

For each: Buyer / Seller / Split / Other

- NHD Paid By
- Home Inspection Paid By
- Termite Inspection Paid By `+`
- Wildfire Disclosure Paid By
- Safety Device Compliance Paid By
- Government Inspections Paid By
- Government Corrections Paid By
- Lender Title Policy Paid By

---

## 14. Transfer Taxes

- County Transfer Tax Paid By
  - Buyer
  - Seller
  - Split
  - Other
- City Transfer Tax Paid By
  - Buyer
  - Seller
  - Split
  - Other

---

## 15. Other Fees

- Other Fee 1 Description
- Other Fee 1 Paid By
  - Buyer
  - Seller
  - Split
  - Other
- Other Fee 2 Description
- Other Fee 2 Paid By
  - Buyer
  - Seller
  - Split
  - Other

---

## 16. Contract Clauses (Yes/No)

- Liquidated Damages
- Arbitration Clause
- All Inclusions Stay With Property
- Buyer Right to Inspect
- Compliance With Local Ordinances
- Time Is of Essence

---

## 17. Additional Terms

- Additional Terms

---

## 18. Escalation Clause `+`

> **Note:** Escalation clauses are not part of the C.A.R. RPA. This section is VoicePilot additional functionality, typically handled via Additional Terms or a separate addendum.

- Escalation Increment (above competing offer)
- Maximum Price Cap
- Escalation Clause Text

---

## 19. BRBC (Buyer Representation / Buyer Broker Compensation)

- Compensation Type `+`
  - % of Purchase Price
  - Flat Fee
  - Seller Paid
  - Hourly
  - Other
- Compensation ($)
- Compensation (%)
- Compensation Payer
  - Seller
  - Buyer
  - Other
- Retainer Amount `+`
- Retainer Credited at Close (Yes/No) `+`
- Exclusive Representation (Yes/No) `+`
- BRBC Expiration Date `+`
- BRBC Executed (Yes/No)
- BRBC Executed Date `+`
- Buyer Brokerage DRE #
- Compensation Notes `+`

> **Note:** The RPA references BRBC minimally (amount, percent, payer, executed). The expanded fields above come from the separate BRBC form and are included here for workflow completeness.
