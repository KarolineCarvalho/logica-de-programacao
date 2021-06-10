using System;

namespace _7_condicionais
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Executando prejeto 7 - Condicionais");

            int idadeJoao = 19;
            int quantidadePessoas = 2;

            if (idadeJoao >= 18)
            {
                Console.WriteLine("João possui mais de 18 anos de idade. Pode entrar.");
            }
            else
            {
                if (quantidadePessoas >= 2)
                {
                    Console.WriteLine("João é menor de idade, mas está acompanhado.");
                }
                else
                {
                    Console.WriteLine("João não possui mais de 18 anos. Não pode entrar.");
                }

            }

            Console.ReadLine();

        }
    }
}
