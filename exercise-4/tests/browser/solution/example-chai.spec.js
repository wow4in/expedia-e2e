/**
* Solution: Example 4 using Chai's expect()
*/

var expect = require('chai').expect;

describe('Example using Chai\'s assertion library', function () {
    describe('page title', function () {
        var expectedPageTitle = "Verbo - Simple travel planning";

        it('should be ' + expectedPageTitle, function () {
            /* Notice we're removing the returned Promise, and breaking each `.then()` into its own line. */

            // Navigate to the home page and test the page title
            browser.url('/');

            // Get the page title
            var pageTitle = browser.getTitle();

            // Log the page title (just for fun)
            console.log('\n🤖 (Chai) The page title is: ' + pageTitle);

            // Assert the page title is what we expect it to be
            expect(pageTitle).to.equal(expectedPageTitle);

            // HINT: Want to see what a failure looks like?  
            //       Uncomment the line below to try the `.not.to.equal()` syntax!
            // expect(pageTitle).not.to.equal(expectedPageTitle);

            // HINT: You can also change the page title in `verbo/public/index.html` to simulate an actual bug in the code, which should also cause your test to fail.
        });
    });
});
