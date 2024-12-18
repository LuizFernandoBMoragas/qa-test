# **1.1 THEORETICAL QUESTIONS**
    Instructions:
    1. Imagine you're working on an e-commerce platform that currently has no automated
    tests in place. How would you determine which areas of the application to prioritize for
    testing, and why?

    2. "During testing, you discover that the 'Add to Cart' functionality is failing—when
    adding multiple items of the same product, the cart always shows a quantity of 1. How
    would you document this issue as a bug report to ensure it is clear and actionable for
    the development team?"

-------------------------------

## **1.1.1 Steps to Prioritize Testing:**

I would prioritize testing based on business impact, risk analysis, and usage, ensuring the most critical areas for revenue and customer experience are validated first.

**Identify Business-Critical Functionalities**

Prioritize core e-commerce functionalities that directly affect user experience and revenue generation:
Login and Authentication
Product Search and Filtering
Add to Cart and Cart Management
Checkout and Payment Processing
Order Confirmation and Notifications
These areas are central to the customer journey. A failure in any of these functionalities can lead to financial loss and damage user trust.

**Analyze Historical and Potential Risks**

Check for sections of the platform that have historically caused bugs.
High-Risk Features: Complex or newly released features can easily fail.
Focusing on high-risk areas ensures efficient testing where failures are most likely to occur.

**Focus on High-Traffic and High-Usage Features**

Use tools or user session data to identify features with the most user traffic like “Search,” “Add to Cart,” and “Checkout”.
High-traffic areas have the most user exposure, so failures here impact the largest number of customers.

**Check for Integration Points and Dependencies**

Features that depend on third-party systems (like payment gateways, APIs) or internal integrations should be prioritized:
Failures in integrations can break the entire user flow and cause financial loss.

**Start with Smoke and Regression Testing**

Focus on smoke testing to ensure critical functionalities work.
Follow this with regression testing to catch any breakages when new changes are introduced.
Prioritize Test Scenarios Based on Severity and Impact

**I would assign priorities:**
P1 (Critical): Functionalities tied to payments, cart, and checkout.
P2 (High): Product search, user authentication.
P3 (Medium): UI inconsistencies or less frequently used features.


-------------------------------

## **1.1.2 Documenting the 'Add to Cart' Issue (Bug Report)**

When documenting the bug, I would create a clear and concise bug report using the following template to ensure all relevant details are captured and developers can reproduce and resolve the issue efficiently.

**Bug Report:** 'Add to Cart' Quantity Issue

**Title:**
Add to Cart functionality fails to update quantity for multiple items of the same product.

**Priority:**
High

**Severity:**
Major

**Environment:**

Platform: E-commerce Web Platform
Browser: Chrome 120.0.0 (Latest)
OS: Windows 11
Testing Environment: Staging

**Steps to Reproduce:**

Navigate to the product page of any item.
Click on the “Add to Cart” button to add one item of Product X.
Repeat Step 2 multiple times to add more quantities of the same product.
Open the cart page to verify the quantity of Product X.

**Expected Result:**
The cart should display the correct acumulated quantity of the product added (exemple: 3 items of Product X if added 3 times).

**Actual Result:**
The cart always shows a quantity of 1 for Product X, regardless of how many times it was added.

**Attachments:**

Depending on each case, some attachments might help the team to better undertand the problem. It can be: 
A screenshot of the cart showing the incorrect quantity.
A short recording to demonstrate the steps and issue clearly.
Or Console logs or network responses, if applicable (exemplo: errors in API calls).

**Impact:**

Users are unable to add multiple quantities of the same product to their cart.
This blocks customers from completing accurate purchases, leading to a poor user experience and revenue loss.

**Additional Notes:**
This issue occurs across multiple browsers (Chrome, Firefox) and devices (desktop and mobile).
Verified on staging; further testing required on production.