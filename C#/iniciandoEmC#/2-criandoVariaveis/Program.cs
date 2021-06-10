using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2_criandoVariaveis
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto 2 - Criando Variáveis");

            int idade;
            idade = 32;

            Console.WriteLine(idade);

            idade = 10;
            Console.WriteLine(idade);

            idade = 10 + 5;
            Console.WriteLine("10 + 5 = " + idade);

            idade = 10 + 5 * 2;
            Console.WriteLine("10 + 5 * 2 = " + idade);

            idade = (10 + 5) * 2;
            Console.WriteLine("(10 + 5) * 2 = " + idade); 

            Console.WriteLine("Execução finalizada. Tecle enter para sair...");
            Console.ReadLine();

        }
    }
}
