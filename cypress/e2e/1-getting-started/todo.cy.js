describe("App Testing", () => {
    it("Test 1", () => {
        cy.viewport(1920, 1080);
        cy.visit("http://localhost:5173/").wait(1000);

        // ARTISTS INFO TESTS
        cy.get(".input")
            .type("rihanna")
            .wait(2000)
            .get(".artist-card > .card-img-top")
            .should("be.visible") // Artist photo should be visible
            .get(".artist-card > .card-body > .card-title")
            .should("contain", "Rihanna") // Artist name should be the same as input
            .get(".artist-card > .card-body > .card-text")
            .should("be.visible") // Artist description should be visible
            .get(".artist-card > :nth-child(3)")
            .find(".artist-icon")
            .should("be.visible"); // Spotify icon should be visible

        // TOP SONGS TESTS
        cy.get(".cards-wrapper").children().should("have.length", "10"); // Container should have 10 songs

        // First song card tests
        cy.get(".cards-wrapper > :nth-child(1) > .card-img-top")
            .should("be.visible") // Song cover should be visible
            .get(".cards-wrapper > :nth-child(1) > .card-body > .card-title")
            .should("be.visible") // Song title should be visible
            .get(".cards-wrapper > :nth-child(1) > .card-body > .card-text")
            .should("be.visible") // Song artists should be visible
            .get(".cards-wrapper > :nth-child(1) > :nth-child(3)")
            .find(".spotify-icon")
            .should("be.visible") // Spotify icon should be visible
            .get(":nth-child(1) > .btns-wrapper > :nth-child(1)")
            .should("be.visible") // Play button should be visible
            .click()
            .get(".modal-body")
            .find("iframe")
            .should("be.visible") // Spotify player should be visible
            .get(".close-player > .btn")
            .should("be.visible") // Close button should be visible
            .click()
            .get(":nth-child(1) > .btns-wrapper > :nth-child(2)")
            .should("be.visible"); // Favourite button should be visible

        // Next song cards tests
        for (let i = 2; i <= 10; i++) {
            cy.get(`:nth-child(${i}) > .card-img-top`)
                .should("be.visible") // Song cover should be visible
                .get(`:nth-child(${i}) > .card-body > .card-title`)
                .should("be.visible") // Song title should be visible
                .get(`:nth-child(${i}) > .card-body > .card-text`)
                .should("be.visible") // Song artist should be visible
                .get(`.cards-wrapper > :nth-child(${i}) > :nth-child(3)`)
                .find(".spotify-icon") // Assuming "spotify-icon" is the correct class name
                .should("be.visible") // Spotify icon should be visible
                .get(`:nth-child(${i}) > .btns-wrapper > :nth-child(1)`)
                .should("be.visible") // Play button should be visible
                .click()
                .get(".modal-body")
                .find("iframe")
                .should("be.visible") // Spotify player should be visible
                .get(".close-player > .btn")
                .should("be.visible") // Close button should be visible
                .click()
                .get(`:nth-child(${i}) > .btns-wrapper > :nth-child(2)`)
                .should("be.visible"); // Favourite button should be visible
        }
    });
});
