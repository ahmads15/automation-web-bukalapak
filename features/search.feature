Feature: Serch page

Background: Open browser Bukalapak.com

Given User open browser 'Homepage' page bukalapak.com

@s1
Scenario Outline: User dapat melakukan search pada homepage bukalapak
    When User input '<valSearch>' on search field
    Then User can see results '<verifyResultSearch>' on page

    Examples:
        | valSearch           | verifyResultSearch |
        | @~!@@               |  searchNotFound    |
        | fifa 22 pc steam    |  searchFound       |
