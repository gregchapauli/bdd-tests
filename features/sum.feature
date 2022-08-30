Feature: simple sum

    this is a simple sum of 2 numbers

    Scenario: sum of 2 numbers
        Given first param of sum set to 2
        When I add 10
        Then the variable result of sum should be 12

    Scenario Outline: sum of 2 numbers much more complex
        Given first param of sum set to <var>
        When I add <add>
        Then the variable result of sum should be <result>
    
    Examples:
        | var | add | result |
        | 2   | 10  | 12     |
        | 0   | 0   | 0      |
        | 2   | 0   | 2      |
        | 100 | 10  | 110    |
        | 12  | 10  | 22     |
        | 20  | 30  | 50     |

