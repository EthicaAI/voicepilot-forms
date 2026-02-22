---
layout: default
title: "Deep Link Field Info Box Content"
---

# Deep Link Field Info Box Content

**Version:** 1.0.0  |  **Date:** 2026-02-22

Info box descriptions for every field on the VoicePilot deep link offer form. Each entry provides the text that appears when a user clicks the info (eye) icon next to a field.

**Legend:**
- `+` = VoicePilot Addition — not on the C.A.R. RPA
- `(calculated)` = Convenience field derived from other values
- RPA references use the C.A.R. Residential Purchase Agreement section numbering

---

## 1. Sellers & Agents

### Seller

#### Seller Name `+`
VoicePilot Addition — not on the C.A.R. RPA

The full legal name of the property seller. On the standard RPA, seller information is filled in at the time of acceptance, not at offer submission. This field is included here for agent workflow convenience so you can identify the seller while preparing the offer.

#### Seller Email `+`
VoicePilot Addition — not on the C.A.R. RPA

The seller's email address. This is not part of the RPA offer body but is included for your records and workflow convenience. It can be useful for coordinating with the listing agent or for electronic signature delivery.

#### Seller Phone `+`
VoicePilot Addition — not on the C.A.R. RPA

The seller's phone number. Like other seller fields, this is not part of the RPA offer but is kept here so agents have seller contact details readily available during the offer preparation process.

### Buyer Brokerage / Buyer Agent

#### Buyer Brokerage
RPA Section 2 (Agency Representation)

The name of the brokerage firm representing the buyer. This must match the brokerage name as registered with the California DRE. It appears on page 17 of the RPA and establishes which firm is acting as the buyer's agent in the transaction.

#### Buyer Brokerage DRE #
RPA Section 2 (Agency Representation)

The California Department of Real Estate license number for the buyer's brokerage firm. This is the firm-level license number, not the individual agent's license. It is required for all real estate transactions in California and appears alongside the brokerage name on the RPA.

#### Buyer Agent
RPA Section 2 (Agency Representation)

The full name of the real estate agent representing the buyer. This is the individual agent's name, not the brokerage. It must match the name on the agent's DRE license and will appear on the executed agreement.

#### Buyer Agent License
RPA Section 2 (Agency Representation)

The individual DRE license number of the buyer's agent. California requires all agents acting in a transaction to disclose their personal license number. This is distinct from the brokerage license number and can be verified at the DRE website.

#### Buyer Agent Phone
RPA Section 2 (Agency Representation)

The buyer agent's phone number for transaction-related communication. This is included in the broker information section of the RPA and provides the primary contact number for the listing side to reach the buyer's representative.

#### Buyer Agent Email
RPA Section 2 (Agency Representation)

The buyer agent's email address. This is used for electronic delivery of documents, disclosures, and transaction communications. The RPA allows email as an approved method of document delivery under the agreement's terms.

### Listing Brokerage / Listing Agent

#### Listing Brokerage
RPA Section 2 (Agency Representation)

The name of the brokerage firm representing the seller (listing side). This must match the brokerage name registered with the California DRE. The listing brokerage is the firm that holds the listing agreement with the seller.

#### Listing Agent
RPA Section 2 (Agency Representation)

The full name of the listing agent representing the seller. This is the individual agent who listed the property and will present offers to the seller. The name must match the agent's DRE license.

#### Listing Agent License
RPA Section 2 (Agency Representation)

The individual DRE license number of the listing agent. Required for all California real estate transactions. This can be verified on the DRE website and must be disclosed on the purchase agreement.

#### Listing Agent Phone
RPA Section 2 (Agency Representation)

The listing agent's phone number. This is included in the broker information section and provides the buyer side a direct line to the seller's representative for offer discussions and transaction coordination.

#### Listing Agent Email
RPA Section 2 (Agency Representation)

The listing agent's email address for transaction-related communications and electronic document delivery. This is the primary point of contact on the seller side for sending disclosures, counteroffers, and status updates.

---

## 2. Buyers (Supports Multiple Buyers)

### Buyer 1

#### Buyer 1 Name
RPA Section 1 (Offer)

The full legal name of the primary buyer. If the buyer is an entity (trust, LLC, corporation, or partnership), enter the full legal entity name. This name will appear on title and all transaction documents, so accuracy is critical.

#### Buyer 1 Entity Type
RPA Section 1 (Offer)

The legal classification of the buyer. Select "Individual" for a natural person. If the buyer is purchasing through a legal entity, select the appropriate type: Trust, LLC, Corporation, or Partnership. The entity type affects vesting, tax treatment, and may require additional documentation such as trust certification or articles of organization.

### Buyer 2

#### Buyer 2 Name
RPA Section 1 (Offer)

The full legal name of the second buyer, if applicable. When two or more individuals are purchasing together (e.g., spouses or partners), list each buyer separately. The vesting section will determine how title is held among multiple buyers.

#### Buyer 2 Entity Type
RPA Section 1 (Offer)

The legal classification of the second buyer. Select "Individual" for a natural person or the appropriate entity type. When multiple buyers of different entity types are purchasing together, each buyer's entity type should be specified independently.

### Buyer 3

#### Buyer 3 Name
RPA Section 1 (Offer)

The full legal name of the third buyer, if applicable. Three or more buyers on a single purchase is less common but may occur with investment groups, family purchases, or tenancy-in-common arrangements.

#### Buyer 3 Entity Type
RPA Section 1 (Offer)

The legal classification of the third buyer. Select the appropriate entity type. Multiple buyers with different entity types (e.g., an individual and a trust purchasing together) should each have their type specified.

### Buyer 4

#### Buyer 4 Name
RPA Section 1 (Offer)

The full legal name of the fourth buyer, if applicable. If there are more than four buyers, the Additional Signature Addendum (ASA) may be needed to accommodate all parties.

#### Buyer 4 Entity Type
RPA Section 1 (Offer)

The legal classification of the fourth buyer. As with all buyers, select "Individual" for a natural person or the appropriate entity type. Consult with the escrow officer regarding vesting options for transactions with multiple buyers.

---

## 3. Price & Deposits

### Purchase

#### Offer Price
RPA Section 3 (Finance Terms)

The total purchase price being offered for the property. This is the headline number on the offer and includes all financing components (down payment, loans, and any credits). Enter the full dollar amount. In competitive markets, consider pricing strategy relative to list price, comparable sales, and appraisal risk.

### Initial Deposit (EMD)

#### Initial Deposit ($)
RPA Section 3A (Initial Deposit)

The earnest money deposit (EMD) amount in dollars. This is the good-faith deposit that shows the buyer's seriousness and is delivered after acceptance. Typical deposits in California range from 1% to 3% of the purchase price, though higher deposits can strengthen an offer. The deposit is applied toward the purchase price at closing.

#### Initial Deposit (%) `+` `(calculated)`
VoicePilot Addition — not on the C.A.R. RPA

A calculated convenience field showing the initial deposit as a percentage of the offer price. This is automatically derived from the deposit amount and offer price. It is not a field on the RPA but helps agents quickly assess whether the deposit amount is competitive.

#### Initial Deposit Due Within
RPA Section 3A (Initial Deposit)

The number of business days after acceptance within which the buyer must deliver the initial deposit. The RPA default is typically 3 business days. Missing this deadline can put the buyer in breach, so ensure the buyer has funds readily accessible. The deposit is delivered to the party specified in the "Initial Deposit Held By" field.

#### Deposit Method
RPA Section 3A (Initial Deposit)

How the initial deposit will be delivered. Options are Wire Transfer, Check, or Cashier's Check. Wire transfer is the most common and fastest method. Personal checks may not be accepted by all escrow companies. Cashier's checks provide guaranteed funds. Be aware of wire fraud risks and always verify wiring instructions by phone.

#### Initial Deposit Held By
RPA Section 3A (Initial Deposit)

Who will hold the buyer's earnest money deposit. Options are Escrow Holder (most common), Seller's Broker, or Other. The escrow holder is the safest choice as deposits are held in a trust account governed by escrow regulations. If "Seller's Broker" is selected, the listing broker's trust account holds the funds.

### Escrow

#### Escrow Holder
RPA Section 3A (Initial Deposit)

The name of the escrow company that will handle the transaction. The escrow holder is a neutral third party that manages funds, documents, and the closing process. In California, the buyer typically selects the escrow company, though this is negotiable. Enter the company name (e.g., "First American Title" or "Chicago Title").

#### Escrow Contact
RPA Section 3A (Initial Deposit)

The name and/or contact information of the specific escrow officer handling the transaction. Having a named contact ensures smooth communication during the closing process. Include the escrow officer's name and phone number or email if known.

### Increased Deposit

#### Increased Deposit Amount
RPA Section 3B (Increased Deposit)

An additional deposit amount to be delivered after the initial deposit. This is used to demonstrate stronger financial commitment, often triggered after contingency removal. The increased deposit is in addition to (not replacing) the initial deposit. If no increased deposit is planned, leave this blank.

#### Increased Deposit Due Within
RPA Section 3B (Increased Deposit)

The number of days after acceptance within which the buyer must deliver the increased deposit. This timeline runs from the date of acceptance, not from when the initial deposit was delivered. Coordinate this with contingency removal dates to avoid delivering additional funds before inspections are complete.

### Funds

#### Funds Source
RPA Section 3 (Finance Terms)

The source of the buyer's funds for the purchase. Options are Cash, Loan, Gift, Sale of Property, or Other. This tells the seller how the buyer intends to fund the purchase. "Sale of Property" indicates the buyer needs to sell another property first, which may trigger a contingency. Multiple sources can apply (e.g., loan plus gift for down payment).

#### Proof of Funds Attached
RPA Section 3 (Finance Terms)

Whether documentation proving the buyer has sufficient funds is included with the offer. Proof of funds typically includes bank statements, investment account statements, or a letter from a financial institution. Attaching proof of funds strengthens an offer, especially for cash offers or large down payments.

### Appraisal

#### Appraisal Minimum Type
RPA Section 3 (Finance Terms)

Determines the minimum appraised value the buyer will accept. "Purchase Price" means the buyer requires the property to appraise at or above the offer price. "Fixed Amount" allows the buyer to specify a lower threshold, effectively agreeing to cover any gap between the appraised value and the purchase price. Waiving or lowering the appraisal minimum strengthens the offer but increases buyer risk.

### Seller Credit

#### Seller Credit ($)
RPA Section 3Q (Costs & Credits)

The dollar amount the buyer is requesting the seller to credit back at closing. Seller credits are typically used to offset the buyer's closing costs, prepaid items, or repair costs. The credit reduces the seller's net proceeds. Lender guidelines may cap the allowable seller credit based on loan type and down payment percentage.

#### Seller Credit (%) `+` `(calculated)`
VoicePilot Addition — not on the C.A.R. RPA

A calculated convenience field showing the seller credit as a percentage of the offer price. This is automatically derived from the credit amount and offer price. It helps agents quickly assess the magnitude of the credit request and check against lender limits (e.g., conventional loans often cap seller credits at 3% for low down payment buyers).

#### Seller Credit Purpose
RPA Section 3Q (Costs & Credits)

A description of what the seller credit will be applied toward. Common purposes include "closing costs," "rate buydown," "repairs," or a combination. Being specific about the purpose helps the seller evaluate the request and may be required by the buyer's lender for underwriting purposes.

#### Seller Credit Notes
RPA Section 3Q (Costs & Credits)

Any additional notes or conditions related to the seller credit. Use this for specific details that don't fit in the purpose field, such as "credit to be applied to non-recurring closing costs only" or "credit amount not to exceed actual closing costs." Lender restrictions on credits should be noted here.

---

## 4. Financing

### Financing Type

#### Financing Type
RPA Section 3C (Loans)

The type of loan the buyer will use to finance the purchase. Options include Cash (no loan), Conventional, FHA, VA, USDA, Seller Financing, or Other. The financing type affects the offer's competitiveness — cash and conventional offers are generally preferred by sellers. FHA and VA loans have specific property condition requirements and appraisal standards that sellers should be aware of.

#### Cash Offer
RPA Section 3 (Finance Terms)

Whether this is an all-cash purchase with no financing contingency. A true cash offer means the buyer has liquid funds to cover the entire purchase price without any loan. Cash offers are typically stronger because they eliminate appraisal and loan contingency risks, and can close faster. The buyer should have proof of funds readily available.

### Loan Details

#### Down Payment ($)
RPA Section 3 (Finance Terms)

The dollar amount the buyer will pay out of pocket toward the purchase price. The down payment is the difference between the purchase price and the loan amount. Higher down payments generally result in better loan terms and make the offer more competitive. The down payment amount should be consistent with the loan type selected.

#### Down Payment (%) `+` `(calculated)`
VoicePilot Addition — not on the C.A.R. RPA

A calculated convenience field showing the down payment as a percentage of the offer price. This is automatically derived from the down payment amount and offer price. Common thresholds: 20% avoids PMI on conventional loans, 3.5% is the FHA minimum, and VA/USDA allow 0% down.

#### Loan Amount
RPA Section 3C (Loans)

The total amount the buyer intends to borrow. This should equal the purchase price minus the down payment (excluding any seller credits). Ensure the loan amount is consistent with the financing type and down payment percentage. For FHA loans, the loan amount may include the upfront mortgage insurance premium.

#### Interest Rate (%)
RPA Section 3C (Loans)

The interest rate specified in the buyer's loan terms. This is typically the rate quoted in the pre-approval letter or the rate the buyer is targeting. While the actual rate locks closer to closing, stating a rate in the offer shows the seller the buyer's expected loan terms. Leave blank if not yet determined.

#### Interest Rate Type
RPA Section 3C (Loans)

Whether the loan has a fixed or adjustable interest rate. A fixed-rate loan maintains the same rate for the life of the loan. An adjustable-rate mortgage (ARM) has a rate that can change after an initial fixed period. Most residential purchases use fixed-rate loans, but ARMs may offer lower initial rates.

#### Loan Points
RPA Section 3C (Loans)

Discount points the buyer intends to pay to lower the interest rate. One point equals 1% of the loan amount. Paying points upfront reduces the monthly payment over the life of the loan. This is typically a buyer cost and is noted here to give the seller a complete picture of the buyer's financing strategy.

### Buyer Qualification

#### Pre-approval Attached
RPA Section 3C (Loans)

Whether a pre-approval letter from the buyer's lender is included with the offer. A pre-approval letter demonstrates that the buyer has been vetted by a lender and is qualified for the loan amount. Attaching a pre-approval significantly strengthens the offer. It is distinct from pre-qualification, which is a less rigorous review.

#### Pre-qualification Status
RPA Section 3C (Loans)

The level of lender vetting the buyer has completed. "Pre-qualified" means the buyer provided basic financial information and received an initial estimate. "Pre-approved" means the lender verified income, assets, and credit. "Fully Underwritten" means the loan has been through full underwriting and only needs the property — this is the strongest qualification level.

---

## 5. Closing & Possession

#### Close of Escrow (days)
RPA Section 3 (Finance Terms)

The number of days from acceptance to the close of escrow. This is when the sale is finalized and title transfers. The California standard is 30 days, but timelines vary: cash offers may close in 14–21 days, while FHA/VA loans often need 30–45 days. A shorter escrow period can make an offer more attractive to sellers.

#### Acceptance Date
RPA Section 1 (Offer)

The date the offer was accepted by the seller. This date triggers all time-based deadlines in the agreement — contingency periods, deposit delivery, and close of escrow are all counted from this date. It is filled in at the time of acceptance, not when the offer is submitted.

### Possession

#### Possession Timing
RPA Section 3 (Finance Terms)

When the buyer takes physical possession of the property. "At Close of Escrow" means the buyer gets keys on closing day (most common). "After Close" means the seller stays in the property for an agreed period after closing. "To Be Determined" means the timing will be negotiated separately or addressed in an addendum.

#### Possession at Close
RPA Section 3 (Finance Terms)

A yes/no confirmation that the buyer will receive possession at the close of escrow. When set to "Yes," the buyer receives the keys and right to occupy the property on the day escrow closes. If the seller needs additional time, this should be "No" and a rent-back arrangement should be specified below.

### Rent Back

#### Rent Back Requested
RPA Section 3 (Finance Terms)

Whether the seller has requested to remain in the property after the close of escrow. A rent-back allows the seller to stay as a tenant for a specified period, which is common when the seller is purchasing another property and needs time to move. The terms of the rent-back (duration and rate) are specified in the fields below.

#### Rent Back Days
RPA Section 3 (Finance Terms)

The number of days the seller will remain in the property after closing under the rent-back agreement. Rent-backs longer than 60 days may cause lender issues for the buyer, as the property could be classified as investment rather than owner-occupied. Short rent-backs of 3–14 days are most common.

#### Seller Post-Possession Days
RPA Section 3M (Occupancy)

The number of days the seller may remain in possession after the close of escrow. This is the formal post-possession period agreed to in the contract. If the seller overstays this period, the buyer may have legal remedies. This should align with the rent-back days if a rent-back is being used.

#### Post-Possession Daily Rate
RPA Section 3M (Occupancy)

The daily rate the seller pays the buyer for each day of post-possession occupancy. This compensates the buyer for the seller's continued use of the property after closing. A common formula is the buyer's daily PITI (principal, interest, taxes, insurance) cost, though the rate is negotiable.

---

## 6. Contingencies

### Periods

#### Loan Contingency Period
RPA Section 3 (Finance Terms)

The number of days the buyer has to secure loan approval. The default is 17 days from acceptance. During this period, the buyer can cancel the agreement if they cannot obtain financing. Removing or shortening the loan contingency period strengthens the offer but increases the buyer's risk of losing their deposit if the loan falls through.

#### Appraisal Contingency Period
RPA Section 3 (Finance Terms)

The number of days the buyer has to obtain a satisfactory appraisal. The default is 17 days from acceptance. If the property appraises below the purchase price, the buyer can negotiate, make up the difference, or cancel during this period. Waiving the appraisal contingency is common in competitive markets but means the buyer must cover any shortfall.

#### Investigation Period
RPA Section 3 (Finance Terms)

The number of days the buyer has to investigate the property's physical condition, including inspections. The default is 17 days from acceptance. This is the buyer's window to conduct home inspections, review reports, and request repairs or credits. All physical inspections should be completed within this period.

#### Insurance Contingency
RPA Section 3 (Finance Terms)

The number of days the buyer has to confirm acceptable homeowner's insurance availability and cost. In California wildfire zones or flood-prone areas, obtaining insurance can be challenging and expensive. This contingency allows the buyer to cancel if they cannot secure adequate coverage at a reasonable cost.

#### Seller Documents Review
RPA Section 3 (Finance Terms)

The number of days the buyer has to review seller-provided disclosures and documents. This includes the Transfer Disclosure Statement (TDS), Seller Property Questionnaire (SPQ), Natural Hazard Disclosure, and any other seller-provided reports. The buyer should carefully review all documents within this period.

#### Title Report Review
RPA Section 3 (Finance Terms)

The number of days the buyer has to review the preliminary title report. The title report reveals ownership history, liens, easements, encumbrances, and other matters affecting the property's title. The buyer should review for any issues that could affect ownership or intended use of the property.

#### HOA Disclosure Review
RPA Section 3 (Finance Terms)

The number of days the buyer has to review HOA documents if the property is in a homeowners association. HOA documents include CC&Rs, bylaws, financial statements, meeting minutes, and pending special assessments. These documents can reveal significant financial obligations or restrictions on property use.

#### Leased Items Review
RPA Section 3 (Finance Terms)

The number of days the buyer has to review any leased items that remain with the property. Common leased items include solar panels, water softeners, propane tanks, and security systems. The buyer should understand the lease terms, monthly costs, and whether the leases are assumable or must be paid off at closing.

#### Informational Access Period
RPA Section 3 (Finance Terms)

The number of days the buyer has to access the property for informational purposes only, without the right to request repairs. This period may extend beyond the investigation contingency and is used for activities like taking measurements, planning renovations, or showing the property to contractors.

### Inspection

#### Inspection Types
RPA Section 3 (Finance Terms)

A comma-separated list of the types of inspections the buyer intends to conduct. Common inspections include general home inspection, termite/pest, roof, chimney, sewer/septic, pool/spa, foundation, mold, and radon. Specifying inspection types upfront sets expectations with the seller about the scope of the investigation.

### Conditional / Waiver

#### Sale of Property Contingency
RPA Section 3 (Finance Terms)

Whether the buyer's offer is contingent on the sale of another property they own. If "Yes," the buyer must sell their existing property before (or concurrently with) closing on this purchase. This contingency weakens an offer because it introduces uncertainty about whether the buyer's property will sell. A Contingency of Property Sale addendum (COP) is typically attached.

#### Contingency Waived at Offer
RPA Section 3 (Finance Terms)

Whether the buyer is waiving contingencies at the time of offer submission. Waiving contingencies makes the offer more competitive but removes the buyer's protections. Common in hot markets, this typically applies to the appraisal and/or loan contingency. The buyer should fully understand the financial risk before waiving. A Contingency Removal form (CR-B) may be triggered.

### Verification

#### Verification of Cash
RPA Section 3H (Verification)

The number of days within which the buyer must verify their cash funds for an all-cash purchase or the cash portion of their purchase. The buyer provides documentation (bank statements, investment accounts) to the seller showing sufficient liquid funds. This verification gives the seller confidence the buyer can close.

#### Verification of Down Payment
RPA Section 3H (Verification)

The number of days within which the buyer must verify their down payment funds. The buyer provides documentation proving they have the down payment amount available. This is separate from the loan pre-approval and gives the seller assurance that the buyer has the cash needed for their portion of the purchase price.

#### Final Verification of Funds
RPA Section 3H (Verification)

The number of days before close of escrow by which a final verification of the buyer's funds must occur. This is a last check to confirm the buyer still has the necessary funds to close. It typically occurs 5–7 days before closing and catches any changes in the buyer's financial situation since the initial verification.

---

## 7. Property Information

#### City
RPA Section 1 (Offer)

The city where the property is located. This should match the city name as it appears on the property's legal address and MLS listing. Some unincorporated areas may use a community name rather than a formal city — use whatever is standard for the mailing address.

#### State
RPA Section 1 (Offer)

The state where the property is located. For the C.A.R. RPA, this will always be California (CA). This field is included for completeness and data consistency across the form.

#### ZIP Code
RPA Section 1 (Offer)

The ZIP code of the property. Use the 5-digit ZIP code matching the property's mailing address. The ZIP code can affect insurance rates, school districts, and tax jurisdictions, so accuracy matters.

#### County
RPA Section 1 (Offer)

The county where the property is located. California has 58 counties, and the county affects transfer tax rates, recording fees, and local ordinances. Some cities span multiple counties, so verify the county using the APN or tax records rather than assuming from the city name.

#### APN
RPA Section 1 (Offer)

The Assessor's Parcel Number, a unique identifier assigned to the property by the county assessor's office. The APN is used to identify the exact parcel for tax and legal purposes. It can be found on the property tax bill, MLS listing, or county assessor website. Format varies by county (e.g., 123-456-789).

#### Intended Use
RPA Section 1 (Offer)

How the buyer intends to use the property. Options are Primary Residence, Vacation Home, or Investment Property. This affects financing terms — primary residences typically get the best loan rates, while investment properties require higher down payments and have higher rates. It also affects tax treatment, insurance requirements, and potential rent-back restrictions.

---

## 8. Items & Personal Property

#### Included Items
RPA Section 3 (Finance Terms)

Items that are included in the sale and will remain with the property. By default, the RPA includes all fixtures and fittings attached to the property (e.g., built-in appliances, window coverings, attached shelving). Use this field to list any additional items the buyer expects to receive, such as a refrigerator, washer/dryer, or outdoor furniture. Be specific to avoid disputes.

#### Excluded Items
RPA Section 3 (Finance Terms)

Items the seller is excluding from the sale and will take with them. If the seller wants to remove something that would normally be considered a fixture (e.g., a chandelier, built-in wine fridge, or mounted TV), it must be explicitly excluded here. Items not listed as excluded are assumed to convey with the property.

#### Personal Property Included
RPA Section 3 (Finance Terms)

Personal property (non-fixtures) that the buyer and seller agree to include in the sale. Personal property is movable and not attached to the real estate — examples include free-standing appliances, patio furniture, or storage sheds that are not permanently affixed. Including personal property in the sale may affect the appraised value and loan terms.

---

## 9. HOA

#### HOA Name
RPA Section 3 (Finance Terms)

The name of the homeowners association governing the property. If the property is in an HOA, the buyer is obligated to join and comply with the CC&Rs. Enter the full legal name of the HOA. If there are multiple HOAs (e.g., a master and sub-association), list the primary one here.

#### HOA Dues
RPA Section 3 (Finance Terms)

The amount of the regular HOA dues payment. Enter the dollar amount for the period specified in the frequency field below. HOA dues cover common area maintenance, amenities, insurance, and reserves. The buyer should review the HOA budget and reserve study to assess whether a special assessment is likely.

#### HOA Dues Frequency
RPA Section 3 (Finance Terms)

How often HOA dues are paid. Options are Monthly, Quarterly, or Annually. Monthly is most common. The frequency affects the buyer's monthly housing expense calculation, which lenders use for qualification. Multiply accordingly to determine the annual cost.

#### TOPA Applies
RPA Section 3 (Finance Terms)

Whether the Tenant-Occupied Property Addendum applies to this transaction. If the property currently has tenants, TOPA must be attached to address tenant rights, security deposits, lease terms, and occupancy issues. California tenant protection laws (including local rent control ordinances) may affect the buyer's ability to occupy the property.

---

## 10. Occupancy & Buyer Intent

#### Buyer Intent
RPA Section 3M (Occupancy)

How the buyer intends to use the property after closing. Options are Primary Residence, Secondary Home, Investment Property, or Other. This must match what the buyer represents to their lender — misrepresenting occupancy intent on a mortgage application is fraud. Sellers may prefer owner-occupant buyers in some markets.

#### Tenant Status
RPA Section 3M (Occupancy)

The current occupancy status of the property. "Vacant" means no one is living there. "Occupied, Vacating at Close" means current tenants will leave by closing. "Occupied, Remaining After Close" means tenants will stay (buyer becomes landlord). "Seller Occupied" means the seller currently lives in the property. Tenant status affects possession timing, required disclosures, and may trigger the TOPA addendum.

---

## 11. Home Warranty

#### Home Warranty Waived
RPA Section 3Q (Costs & Credits)

Whether the buyer is waiving the right to a home warranty. A home warranty covers repair or replacement of major systems and appliances (HVAC, plumbing, electrical, appliances) for typically one year after closing. Waiving the warranty removes this protection. In competitive markets, buyers sometimes waive to simplify the offer.

#### Home Warranty Paid By
RPA Section 3Q (Costs & Credits)

Who pays for the home warranty. Options are Buyer, Seller, Split, or Other. Traditionally in California, the seller pays for the home warranty as a gesture of good faith, but this is negotiable. The cost typically ranges from $400 to $800 depending on coverage level and provider.

#### Home Warranty Cost
RPA Section 3Q (Costs & Credits)

The dollar amount of the home warranty plan. This varies by provider, coverage level, and property size. Basic plans cover major systems only, while premium plans include appliances and additional coverage. Get quotes from the warranty company to enter an accurate amount.

#### Home Warranty Company
RPA Section 3Q (Costs & Credits)

The name of the home warranty company providing coverage. Common California providers include American Home Shield, First American Home Warranty, and Fidelity National Home Warranty. The buyer or seller may have a preference based on past experience or agent recommendation.

---

## 12. Title & Escrow

#### Title Company
RPA Section 3 (Finance Terms)

The name of the title company that will issue the title insurance policy and handle the title search. In California, the buyer typically selects the title company, though this is negotiable. The title company examines public records to verify ownership and identify any liens or encumbrances on the property.

#### Vesting
RPA Section 3 (Finance Terms)

How the buyer will hold title to the property. Common vesting options in California include: Community Property (married couples), Community Property with Right of Survivorship, Joint Tenants (equal shares, right of survivorship), Tenants in Common (can have unequal shares), or as a Trust. Vesting affects inheritance, tax treatment, and liability. Buyers should consult an attorney or tax advisor.

#### Title Cost Split
RPA Section 3Q (Costs & Credits)

Who pays for the owner's title insurance policy. Options are Buyer Pays, Seller Pays, or 50/50 Split. In Southern California, the seller customarily pays for the owner's title policy, while in Northern California, the buyer often pays. Local custom varies by county, so check the prevailing practice in your area.

#### Preliminary Title Report Reviewed
RPA Section 3 (Finance Terms)

Whether the buyer has reviewed the preliminary title report (PTR). The PTR shows the current ownership, existing liens, easements, and other encumbrances on the property. Reviewing the PTR before or soon after submitting an offer helps the buyer identify potential title issues early in the transaction.

#### Title Insurance Paid By
RPA Section 3Q (Costs & Credits)

Who pays for the title insurance policy. Options are Buyer, Seller, Split, or Other. Title insurance protects against losses from defects in title that were not discovered during the title search. The owner's policy protects the buyer, while the lender's policy (required for financed purchases) protects the lender.

#### Escrow Fees Paid By
RPA Section 3Q (Costs & Credits)

Who pays the escrow company's fees for handling the transaction. Options are Buyer, Seller, Split, or Other. Escrow fees cover the neutral third party's work in managing documents, funds, and the closing process. In many California markets, escrow fees are split 50/50 between buyer and seller, but this is negotiable.

---

## 13. Disclosures, Reports & Inspections (Paid By)

#### NHD Paid By
RPA Section 3Q (Costs & Credits)

Who pays for the Natural Hazard Disclosure (NHD) report. The NHD report identifies whether the property is in a designated natural hazard zone, including flood, fire, earthquake fault, seismic hazard, landslide, and wildfire zones. In California, the seller is required to provide this disclosure, but who pays for the report is negotiable.

#### Home Inspection Paid By
RPA Section 3Q (Costs & Credits)

Who pays for the general home inspection. A professional home inspection covers the property's structural components, roof, plumbing, electrical, HVAC, and other systems. The buyer typically pays for this inspection, which usually costs $400–$800 depending on property size. The inspection report informs the buyer's repair requests.

#### Termite Inspection Paid By `+`
VoicePilot Addition — not on the C.A.R. RPA

Who pays for the termite (wood-destroying pest) inspection. While not a separate line item in the standard RPA, termite inspections are very commonly negotiated in California transactions. The inspection identifies active infestations and structural damage. In many markets, the seller customarily pays for Section 1 (active infestation) work, while Section 2 (preventive) is negotiable.

#### Wildfire Disclosure Paid By
RPA Section 3Q (Costs & Credits)

Who pays for wildfire-related disclosure reports. With increasing wildfire risk in California, this report assesses the property's wildfire hazard zone status and may include information about defensible space requirements, fire-resistant construction standards, and local fire authority regulations.

#### Safety Device Compliance Paid By
RPA Section 3Q (Costs & Credits)

Who pays for compliance with California safety device requirements. State law requires sellers to ensure the property has compliant smoke detectors, carbon monoxide detectors, and water heater bracing. This field determines who pays for any installation or upgrades needed to meet current code requirements.

#### Government Inspections Paid By
RPA Section 3Q (Costs & Credits)

Who pays for government-required inspections. Some local jurisdictions require specific inspections before a property can be sold, such as sewer lateral inspections, energy audits, or building permit compliance reviews. The required inspections vary by city and county.

#### Government Corrections Paid By
RPA Section 3Q (Costs & Credits)

Who pays for corrections or repairs required by government inspections. If a government inspection reveals code violations or required upgrades (e.g., sewer line replacement, seismic retrofitting), this field determines who bears the cost of those corrections. This is separate from who pays for the inspection itself.

#### Lender Title Policy Paid By
RPA Section 3Q (Costs & Credits)

Who pays for the lender's title insurance policy. The lender's policy is required on all financed purchases and protects the lender's interest in the property. It is separate from the owner's title policy. The buyer's lender will require this policy as a condition of the loan, and the cost is based on the loan amount.

---

## 14. Transfer Taxes

#### County Transfer Tax Paid By
RPA Section 3Q (Costs & Credits)

Who pays the county transfer tax (documentary transfer tax). In most California counties, the rate is $1.10 per $1,000 of the transfer price. The county transfer tax is assessed on every property sale and is paid at closing. Customarily, the seller pays the county transfer tax in most California markets, but this is negotiable.

#### City Transfer Tax Paid By
RPA Section 3Q (Costs & Credits)

Who pays the city transfer tax, if applicable. Not all California cities impose a transfer tax — but those that do can have significantly higher rates. For example, Los Angeles charges $4.50 per $1,000, Oakland charges $15.00 per $1,000, and San Francisco charges a graduated rate. Check whether the property's city has a transfer tax and the applicable rate.

---

## 15. Other Fees

#### Other Fee 1 Description
RPA Section 3Q (Costs & Credits)

A description of any additional fee not covered by the standard categories above. Use this for transaction-specific costs such as HOA transfer fees, retrofit costs, private transfer fees, or specialized inspection costs. Be specific about what the fee covers so both parties understand the obligation.

#### Other Fee 1 Paid By
RPA Section 3Q (Costs & Credits)

Who pays for the first additional fee described above. Options are Buyer, Seller, Split, or Other. The allocation should be agreed upon during negotiations and documented clearly to avoid disputes at closing.

#### Other Fee 2 Description
RPA Section 3Q (Costs & Credits)

A description of a second additional fee, if applicable. Like the first other fee, use this for costs that don't fit the standard categories. Having two "other fee" slots allows flexibility for transactions with unique cost allocations.

#### Other Fee 2 Paid By
RPA Section 3Q (Costs & Credits)

Who pays for the second additional fee described above. Options are Buyer, Seller, Split, or Other. As with all fee allocations, this should be clearly agreed upon in writing to prevent closing delays or disputes.

---

## 16. Contract Clauses (Yes/No)

#### Liquidated Damages
RPA Section 5 (Additional Terms)

Whether the buyer agrees to the liquidated damages clause. When initialed by both buyer and seller, this clause limits the seller's damages to the buyer's deposit if the buyer breaches the agreement (up to 3% of the purchase price for residential property with 1–4 units that the buyer intends to occupy). This provides certainty to both parties about the consequences of buyer default.

#### Arbitration Clause
RPA Section 5 (Additional Terms)

Whether the buyer agrees to binding arbitration for disputes arising from the agreement. When initialed by both parties, disputes are resolved through arbitration rather than court litigation. Arbitration is typically faster and less expensive than a lawsuit, but the parties waive their right to a jury trial and have limited appeal rights. This clause is optional.

#### All Inclusions Stay With Property
RPA Section 3 (Finance Terms)

Whether all items currently included with the property (fixtures, fittings, and specified items) will remain with the property at close. When set to "Yes," the buyer expects everything that is currently on the property and considered a fixture to stay. Any items the seller wishes to remove must be listed in the Excluded Items field.

#### Buyer Right to Inspect
RPA Section 3 (Finance Terms)

Whether the buyer retains the right to conduct inspections of the property. This is a standard RPA provision that allows the buyer to physically inspect the property and its systems during the investigation period. Setting this to "Yes" is standard; setting it to "No" would mean the buyer is purchasing the property without any inspection rights.

#### Compliance With Local Ordinances
RPA Section 3 (Finance Terms)

Whether the agreement includes compliance with local government ordinances and requirements. This addresses items like city point-of-sale inspections, energy efficiency requirements, seismic retrofitting mandates, and other local regulations that must be satisfied before or at closing. Requirements vary significantly by jurisdiction.

#### Time Is of Essence
RPA Section 5 (Additional Terms)

Whether the "time is of the essence" clause is included. This is a standard legal provision meaning that all dates and deadlines in the agreement are firm and binding. Missing a deadline (deposit delivery, contingency removal, closing date) could constitute a breach. This clause is included by default in the C.A.R. RPA and is rarely removed.

---

## 17. Additional Terms

#### Additional Terms
RPA Section 5 (Additional Terms)

A free-text field for any additional terms, conditions, or provisions not covered by the standard form fields. Use this for special agreements between buyer and seller, such as: specific repair requests, personal property agreements, leaseback terms beyond the standard fields, or any other unique conditions of the offer. Everything entered here becomes a binding part of the agreement.

---

## 18. Escalation Clause `+`

> **Note:** All fields in this section are VoicePilot additions. Escalation clauses are not part of the C.A.R. RPA and are typically handled via the Additional Terms section or a separate addendum.

#### Escalation Increment `+`
VoicePilot Addition — not on the C.A.R. RPA

The dollar amount by which the buyer's offer will automatically increase above the highest competing offer. For example, an increment of $5,000 means the buyer is willing to pay $5,000 more than any other offer, up to the maximum price cap. Escalation clauses can be effective in multiple-offer situations but may not be accepted by all sellers or listing agents.

#### Maximum Price Cap `+`
VoicePilot Addition — not on the C.A.R. RPA

The absolute maximum price the buyer is willing to pay under the escalation clause. The offer will escalate by the specified increment above competing offers but will never exceed this cap. Set this at the highest price the buyer is comfortable paying — the buyer should be prepared to pay up to this amount. The appraisal contingency (if not waived) still protects against overpaying relative to market value.

#### Escalation Clause Text `+`
VoicePilot Addition — not on the C.A.R. RPA

The full text of the escalation clause to be included in the offer. This should specify the escalation increment, maximum cap, and any conditions (such as requiring proof of the competing offer). Because escalation clauses are not a standard C.A.R. form, the language should be reviewed by the buyer's agent and/or attorney to ensure it is enforceable and clearly written.

---

## 19. BRBC (Buyer Representation / Buyer Broker Compensation)

#### Compensation Type `+`
VoicePilot Addition — not on the C.A.R. RPA

How the buyer's agent compensation is structured. Options include Percentage of Purchase Price, Flat Fee, Seller Paid, Hourly, or Other. Since the NAR settlement changes in 2024, buyer agent compensation must be agreed upon in writing (via BRBC) before touring properties. The compensation type selected here should match what is specified in the executed BRBC agreement.

#### Compensation ($)
RPA (Buyer Agent Compensation)

The dollar amount of buyer agent compensation, if structured as a flat fee. This is the total amount the buyer's agent will receive for their services in the transaction. If compensation is based on a percentage of the purchase price, this field may be left blank in favor of the percentage field below.

#### Compensation (%)
RPA (Buyer Agent Compensation)

The buyer agent compensation expressed as a percentage of the purchase price. Common rates range from 2% to 3% of the purchase price. This percentage is applied to the final purchase price (not the list price) to determine the dollar amount of compensation. If a flat fee is used instead, this field may be left blank.

#### Compensation Payer
RPA (Buyer Agent Compensation)

Who is paying the buyer's agent compensation. Options are Seller, Buyer, or Other. Under the 2024 NAR settlement rules, the seller is no longer required to offer compensation to the buyer's agent. The buyer may pay their agent directly, the seller may offer compensation as a concession, or the parties may negotiate a split arrangement.

#### Retainer Amount `+`
VoicePilot Addition — not on the C.A.R. RPA

The upfront retainer amount paid by the buyer to their agent, if applicable. Some BRBC agreements require the buyer to pay a retainer when the agreement is executed. This field captures that amount. The retainer may or may not be credited toward the total compensation at closing — see the field below.

#### Retainer Credited at Close `+`
VoicePilot Addition — not on the C.A.R. RPA

Whether the retainer amount paid by the buyer will be credited toward the total agent compensation at closing. If "Yes," the retainer reduces the remaining balance owed. If "No," the retainer is a separate fee in addition to the closing compensation. This should match the terms of the executed BRBC agreement.

#### Exclusive Representation `+`
VoicePilot Addition — not on the C.A.R. RPA

Whether the buyer has an exclusive representation agreement with their agent. If "Yes," the buyer has agreed to work exclusively with this agent for a specified period and cannot use another agent. If "No," the arrangement is non-exclusive. Exclusive representation agreements are standard practice and provide assurance to both the buyer and agent.

#### BRBC Expiration Date `+`
VoicePilot Addition — not on the C.A.R. RPA

The date on which the Buyer Representation and Broker Compensation agreement expires. All BRBCs must have a defined expiration date. After this date, the agreement terminates unless renewed. The buyer should be aware of this date to ensure coverage through the expected closing period.

#### BRBC Executed
RPA (Buyer Agent Compensation)

Whether the Buyer Representation and Broker Compensation agreement has been signed by the buyer. As of August 2024, NAR settlement rules require a signed BRBC before an agent can show properties to a buyer. A "Yes" here confirms the agreement is in place. The listing agent may request to see the executed BRBC.

#### BRBC Executed Date `+`
VoicePilot Addition — not on the C.A.R. RPA

The date on which the BRBC was signed by the buyer. This establishes when the agreement went into effect and helps determine the expiration date. If the BRBC is amended or renewed, this should reflect the most recent execution date.

#### Buyer Brokerage DRE #
RPA Section 2 (Agency Representation)

The California DRE license number for the buyer's brokerage firm, as recorded in the BRBC. This should match the DRE number listed in the Agency section (Section 1 of this form). It confirms which brokerage is providing buyer representation under the BRBC agreement.

#### Compensation Notes `+`
VoicePilot Addition — not on the C.A.R. RPA

Any additional notes or special terms related to buyer agent compensation. Use this for details such as bonus compensation for dual agency, caps on total compensation, commission splits between agents, or any unique arrangements not captured by the standard fields. These notes should be consistent with the executed BRBC.
