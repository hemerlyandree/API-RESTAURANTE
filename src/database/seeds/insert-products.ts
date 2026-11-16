import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("products").del();

    await knex("products").insert([
        {name: "Nhoque de quatro queijos", price: 45},
       {name: "Isca de Frango", price: 60},
       {name: "Tilapia com alcaparras", price: 100},
       {name: "Bolinho de mandioca", price: 75},
       {name: "Escondidinho de carne de Sol", price: 65},
       {name: "Porção de batatas fritas", price: 40},
       {name: "Executivo de Frango Grelhado", price: 36},
       {name: "Executivo de Tilapia Grelhada", price: 39},
       {name: "Caldo de palmito", price: 30},
       {name: "Refrigerante 350ml", price: 7.5},
       {name: "Suco de laranja 400ml", price: 10},
    ]);
};
