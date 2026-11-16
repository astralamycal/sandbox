// imports
#include <time.h>
#include <stdlib.h>
#include <stdio.h>

// main script

int main()
{
    char difficulty;         // sets difficulty
    int level = 1;           // sets level scalling
    char restartInput = 'y'; // stores input for continuing or not
    int randomLimit;         // sets the max value the random number can take at level 1
    int scanfTest = 0;       // ensures that scanf works as intended
    int playerAmount;        // sets the amount of players
    int player = 1;          // sets which player has to guess
    int guessLimit;          // limits the amount of guesses (multiplied to take playerAmount into account)

    printf("Please input the amount of players :");
    while (scanfTest != 1) // runs until a valid amount is set
    {
        scanfTest = scanf("%d", &playerAmount);
        if (scanfTest != 1)
        {
            printf("error : Please input a valid number.");
            while (getchar() != '\n')
                ; // required to fix scanf
        }
    }

    scanfTest = 0; // reset value for next test
    while (getchar() != '\n')
        ; // required to fix scanf

    printf("Please choose a difficulty (easy (e), medium (m), hard (h), custom (c)) :");
    while (scanfTest != 1) // runs until difficulty is set
    {
        scanfTest = scanf("%c", &difficulty);
        if (difficulty == 'e')
        {
            randomLimit = 10;
            guessLimit = 25;
        }

        else if (difficulty == 'm')
        {
            randomLimit = 100;
            guessLimit = 15;
        }

        else if (difficulty == 'h')
        {
            randomLimit = 1000;
            guessLimit = 10;
        }

        else if (difficulty == 'c') // custom limit
        {
            scanfTest = 0;
            while (scanfTest != 1) // loops until valid value given
            {
                printf("Please input the maximum limit for first level wanted :");
                scanfTest = scanf("%d", &randomLimit);
                if (scanfTest != 1)
                {
                    printf("Please give a valid number (cannot reach more than ~2 billion)");
                    while (getchar() != '\n')
                        ; // required to fix scanf
                }
            }
            scanfTest = 0;
            while (scanfTest != 1) // loops until valid value given
            {
                printf("Please input the limit of guesses per player :");
                scanfTest = scanf("%d", &guessLimit);
                if (scanfTest != 1)
                {
                    printf("Please give a valid number (cannot reach more than ~2 billion)");
                    while (getchar() != '\n')
                        ; // required to fix scanf
                }
            }
        }

        else
        {
            printf("error : Please input one of the four options given.");
            while (getchar() != '\n')
                ; // required to fix scanf
        }
    }

    guessLimit = guessLimit * playerAmount; // takes the amount of players into account

    while (level != 0)
    {
        srand(time(NULL));
        int random_number = rand() % randomLimit + 1; // sets the random number
        int guess = 0;                                // random number always !=0
        int guessAmount = 0;                          // Counts the amount of guesses

        while (guess != random_number) // guessing loop
        {
            if (guessAmount >= guessLimit)
            {
                if (playerAmount != 1)
                {
                    printf("I guess being a team didn't help you win the game :P\n");
                    exit(0);
                }

                else
                {
                    printf("You lost :<");
                    exit(0);
                }
            }

            if (playerAmount != 1)
            {
                printf("Player %d, please pick a number between 1 and %d (attempt %d) :", player, randomLimit, ((guessAmount / playerAmount) + 1));
            }
            else
            {
                printf("Pick a number between 1 and %d (attempt %d):", randomLimit, guessAmount);
            }
            scanfTest = scanf("%d", &guess); // gets the number guessed by the user + the stdout of the scanf

            if (scanfTest != 1 || guess < 1 || guess > randomLimit) // tests if scanf worked : if it didn't then it's not an int + tests if number is in the range given
            {
                printf("error : Please input a number within the range given.\n");
                while (getchar() != '\n')
                    ; // clears input of scanf in case of not a number (https://cboard.cprogramming.com/c-programming/138031-clearing-scanf.html)
            }

            else if (guess > random_number) // when number guessed is too high
            {
                printf("The number is too high.\n");
                guessAmount++;
            }

            else if (guess < random_number) // when number is too low
            {
                printf("The number is too low.\n");
                guessAmount++;
            }

            else // when guess is correct
            {
                guessAmount++;
                if (guessAmount == 1)
                {
                    printf("You won first try!\n");
                }

                else
                {
                    if (playerAmount != 1)
                    {
                        printf("Player %d won after %d guesses accross everyone!\n", player, guessAmount);
                    }
                    else
                    {
                        printf("You won in %d guesses!\n", guessAmount);
                    }
                }
            }
            if (player == playerAmount) // if we have done a loop of everyone guessing we restart
            {
                player = 1;
            }
            else // changes player
            {
                player++;
            }
        }
        printf("Would you like to keep going? y/n :");
        while (getchar() != '\n')
            ;                                       // required for scanf to function
        int scanfTest = scanf("%c", &restartInput); // gets input on whether to continue or not
        if (restartInput != 'y' || scanfTest != 1)  // takes into account number inputs
        {
            level = 0;
            printf("Thank you for playing!\n");
        }

        else
        {
            level++;
            randomLimit = randomLimit * 2;
            printf("This is now level %d.\n", level);
        }
    }
    exit(0);
}