Feature: view HomePage
  I want to view my HomePage

  Scenario: view HomePage
    When I visit home page
    Then I should see nav bar
    Then I should see a wallstreel login button
    Then I should see a footer with 3 icons
