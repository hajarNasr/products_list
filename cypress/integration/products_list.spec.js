describe("should render the table", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should render table with the right headers", () => {
    cy.get("table").should("exist");
    ["Title", "Gtin", "Gender", "Price", "Sale Price", "Image"].forEach(
      (th) => {
        cy.contains(th);
      }
    );
  });

  it("should render the right page of pagination", () => {
    cy.get(".rc-pagination-item-1").should(
      "have.class",
      "rc-pagination-item-active"
    );
    cy.get(".rc-pagination-item-3").click();

    // page 3 is now active
    cy.get(".rc-pagination-item-1").should(
      "not.have.class",
      "rc-pagination-item-active"
    );

    // page 1 isn't active anymore
    cy.get(".rc-pagination-item-3").should(
      "have.class",
      "rc-pagination-item-active"
    );
  });
});

describe("test products search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  function getSearchInput(searchTerm) {
    cy.get("#search-box").type(searchTerm);
    cy.wait(1000);
  }

  it("should render filtered list", () => {
    getSearchInput("Weekday THURSDAY Jeans Slim Fit black");

    // only one page should exist
    cy.get(".rc-pagination-item-1").should("exist");
    cy.get(".rc-pagination-item-2").should("not.exist");
  });

  it("should display a no-records-found message when no records found", () => {
    getSearchInput("doesn't exist");
    cy.contains("No records were found.");
    cy.get(".rc-pagination-item-1").should("not.exist");
  });

  it("should have auto-complete list on search", () => {
    // before search
    cy.get("#auto-complete-list").should("not.exist");
    getSearchInput("Weekday ");
    cy.get("#auto-complete-list").should("exist");
  });
});
