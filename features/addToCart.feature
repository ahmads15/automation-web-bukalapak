Feature: Login page

Background: Open browser Bukalapak.com

Given User open browser 'login' page bukalapak.com

@s1
Scenario: User dapat melihat validasi form
    When User input 'ahmadsutarji15@gmail.com' as email or phone no
    And User click button Lanjut
    And User input 'jibon123' as password
    And User input 'fifa 22 pc steam' on search field
    And User choose product on page
    And User add to cart product
    Then User success add product to cart

