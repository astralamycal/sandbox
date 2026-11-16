#include <stdlib.h>
#include <stdio.h>

int main()
{
    char symbole;
    int nb1;
    int nb2;
    printf("Bonjour\n");
    printf("Choisissez un opérateur parmis les suivants (+, -, *, /, %%) :");
    scanf("%c", &symbole);
    printf("Choisissez le premier nombre :");
    scanf("%d", &nb1);
    printf("Choisissez le deuxième nombre :");
    scanf("%d", &nb2);
    if (symbole == '+')
    {
        int resultat = nb1 + nb2;
        printf("%d %c %d = %d\n", nb1, symbole, nb2, resultat);
    }
    else if (symbole == '-')
    {
        int resultat = nb1 - nb2;
        printf("%d %c %d = %d\n", nb1, symbole, nb2, resultat);
    }
    else if (symbole == '*')
    {
        int resultat = nb1 * nb2;
        printf("%d %c %d = %d\n", nb1, symbole, nb2, resultat);
    }
    else if (nb2 == 0 && (symbole == '/' || symbole == '%'))
    {
        printf("On ne peut pas diviser par 0.");
    }
    else if (symbole == '/')
    {
        double resultat = (double)nb1 / (double)nb2;
        printf("%d %c %d = %.3f\n", nb1, symbole, nb2, resultat);
    }
    else if (symbole == '%')
    {
        int resultat = nb1 % nb2;
        printf("%d %c %d = %d\n", nb1, symbole, nb2, resultat);
    }
    else
    {
        printf("Opération non reconnue.\n");
    }
    exit(0);
}