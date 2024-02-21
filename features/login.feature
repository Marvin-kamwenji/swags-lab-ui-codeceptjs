Feature: Login feature
              In order to login to the application
              As a persona
              I want to be able to provide username and password

        Scenario: Validate the homepage
            Given I am on the homepage
             Then I validate the title of the page along with the elements


        Scenario Outline: Enter credentials and login
             When I enter <username> and password
              And I click on login page
             Then I should be able to login successfully


        Examples:
                  | username                |
                  | standard_user           |
                  | locked_out_user         |
                  | problem_user            |
                  | performance_glitch_user |
                  | error_user              |
                  | visual_user             |
