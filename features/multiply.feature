Feature: multiplication

    this is a multiplication of 2 numbers

    Scenario : multiplication of 2 numbers
        Given first param of multiplication set to 2
        When I multiply 10
        Then the variable result of multiplication should be 20


    Scenario Outline: multiplication of 2 numbers
        Given first param of multiplication set to <var>
        When I multiply <add>
        Then the variable result of multiplication should be <result>
    
    Examples:
        | var | add | result |
        | 2   | 10  | 20     |
        | 0   | 0   | 0      |
        | 2   | 0   | 0      |
        | 100 | 10  | 1000   |
        | 12  | 10  | 120    |
        | 20  | 30  | 600    |

