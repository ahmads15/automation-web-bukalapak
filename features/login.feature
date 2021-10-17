Feature: Login page

Background: Open browser Bukalapak.com

Given User open browser 'login' page bukalapak.com

@s1
Scenario: User dapat melihat validasi form
    When User click button Lanjut
    Then User can see validation 'mandatoryForm' field

@s2
Scenario Outline: User input invalid email or phone number
    When User input '<emailorPhoneNo>' as email or phone no
    And User click button Lanjut
    Then User can see validation '<errMsg>' field
    Examples:
        | emailorPhoneNo           | errMsg                     |
        | ahmadsutarji15gmail.com  | invalidFieldEmailorPhone   |
        | ahmadsutarji15@gmailcom  | invalidFieldEmailorPhone   |
        | 08128371221asas          | invalidFieldEmailorPhone   |
        | 08!384112627             | invalidFieldEmailorPhone   |

@s3
Scenario: User input invalid password
    When User input 'ahmadsutarji15@gmail.com' as email or phone no
    And User click button Lanjut
    And User input 'salahpasswordbro' as password
    Then User can see validation 'invalidPassword' field

@s4
Scenario: User success login with valid credentials
    When User input 'ahmadsutarji15@gmail.com' as email or phone no
    And User click button Lanjut
    And User input 'jibon123' as password
    Then User sucess login
