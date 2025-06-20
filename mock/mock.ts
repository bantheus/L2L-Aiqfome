const mockedData = [
  {
    id: "restaurante-matsuri-concept",
    slug: "matsuri-concept",
    name: "Matsuri Concept",
    logoUrl: "/restaurant-logos/matsuriconcept.webp",
    deliveryFee: 5.0,
    deliveryTime: "30-45 min",
    freeDeliveryAbove: 50.0,
    rating: 4.8,
    closingTime: "22:00",
    minOrder: 20.0,
    distance: 3.5,
    isOpen: true,
    categories: [
      {
        id: "cat-niguiris",
        name: "Niguiris",
        description: "deliciosos niguiris com peixe fresco e arroz temperado.",
        dishes: [
          {
            id: "dish-niguiri-salmao",
            name: "Niguiri de Salmão",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
                promoPrice: 12.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-salmao-hot",
            name: "Niguiri Apimentado",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado e molho apimentado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isSpicy: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-veg",
            name: "Niguiri Vegetariano",
            description:
              "Dupla de niguiris vegetarianos com abacate e pepino sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isVegetarian: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-ceviches",
        name: "Ceviches",
        description:
          "um prato super refrescante de peixe fatiado e marinado com limão",
        dishes: [
          {
            id: "dish-ceviche-salmao",
            name: "Ceviche de Salmão",
            description:
              "Cubos de salmão fresco marinados no limão com cebola roxa, pimentão e coentro.",
            imageUrl: "/dishes/ceviche-salmao.webp",
            sizes: [
              {
                name: "Porção Individual",
                price: 28.9,
                promoPrice: 24.9,
              },
              {
                name: "Porção Grande",
                price: 49.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-torradas",
                name: "Torradinhas",
                price: 0.0,
              },
              {
                id: "acc-molho-soja",
                name: "Molho de Soja",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 8.0,
              },
              {
                id: "extra-limao",
                name: "Mais Limão",
                price: 2.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-fork",
                name: "Garfo",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-bebidas",
        name: "Bebidas",
        dishes: [
          {
            id: "dish-coca-lata",
            name: "Coca-Cola Lata",
            description: "Coca-Cola lata 350ml.",
            imageUrl: "/dishes/coca-lata.webp",
            sizes: [
              {
                name: "350ml",
                price: 6.0,
                promoPrice: 5.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
          {
            id: "dish-agua-sem-gas",
            name: "Água Sem Gás",
            description: "Água mineral sem gás 500ml.",
            imageUrl: "/dishes/agua-sem-gas.webp",
            sizes: [
              {
                name: "500ml",
                price: 4.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
        ],
      },
      {
        id: "cat-sobremesas",
        name: "Sobremesas",

        dishes: [
          {
            id: "dish-harumaki-banana",
            name: "Harumaki de Banana",
            description:
              "Rolinho primavera recheado com banana e açúcar, acompanhado de doce de leite.",
            imageUrl: "/dishes/harumaki-banana.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 12.9,
              },
              {
                name: "Porção (4 unidades)",
                price: 22.9,
                promoPrice: 19.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-doce-de-leite",
                name: "Doce de Leite Extra",
                price: 1.0,
              },
              {
                id: "acc-nutella",
                name: "Nutella",
                price: 2.5,
              },
            ],
            extras: [
              {
                id: "extra-banana",
                name: "Mais Banana",
                price: 2.0,
              },
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
          {
            id: "dish-mochi",
            name: "Mochi de Morango",
            description:
              "Sobremesa japonesa tradicional, recheada com creme de morango.",
            imageUrl: "/dishes/mochi-morango.webp",
            sizes: [
              {
                name: "Unidade",
                price: 9.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-calda-chocolate",
                name: "Calda de Chocolate",
                price: 1.0,
              },
            ],
            extras: [
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
              {
                id: "extra-morango",
                name: "Mais Morango",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
        ],
      },
    ],
  },
  {
    id: "restaurante-subway-avenida-center",
    slug: "subway-avenida-center",
    name: "Subway - Avenida center",
    logoUrl: "/restaurant-logos/subway.webp",
    deliveryFee: 0.0,
    deliveryTime: "30-45 min",
    freeDeliveryAbove: 50.0,
    rating: 4.8,
    closingTime: "22:00",
    minOrder: 20.0,
    distance: 3.5,
    isOpen: true,
    categories: [
      {
        id: "cat-niguiris",
        name: "Niguiris",
        description: "deliciosos niguiris com peixe fresco e arroz temperado.",
        dishes: [
          {
            id: "dish-niguiri-salmao",
            name: "Niguiri de Salmão",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
                promoPrice: 12.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-salmao-hot",
            name: "Niguiri Apimentado",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado e molho apimentado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isSpicy: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-veg",
            name: "Niguiri Vegetariano",
            description:
              "Dupla de niguiris vegetarianos com abacate e pepino sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isVegetarian: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-ceviches",
        name: "Ceviches",
        description:
          "um prato super refrescante de peixe fatiado e marinado com limão",
        dishes: [
          {
            id: "dish-ceviche-salmao",
            name: "Ceviche de Salmão",
            description:
              "Cubos de salmão fresco marinados no limão com cebola roxa, pimentão e coentro.",
            imageUrl: "/dishes/ceviche-salmao.webp",
            sizes: [
              {
                name: "Porção Individual",
                price: 28.9,
                promoPrice: 24.9,
              },
              {
                name: "Porção Grande",
                price: 49.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-torradas",
                name: "Torradinhas",
                price: 0.0,
              },
              {
                id: "acc-molho-soja",
                name: "Molho de Soja",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 8.0,
              },
              {
                id: "extra-limao",
                name: "Mais Limão",
                price: 2.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-fork",
                name: "Garfo",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-bebidas",
        name: "Bebidas",
        dishes: [
          {
            id: "dish-coca-lata",
            name: "Coca-Cola Lata",
            description: "Coca-Cola lata 350ml.",
            imageUrl: "/dishes/coca-lata.webp",
            sizes: [
              {
                name: "350ml",
                price: 6.0,
                promoPrice: 5.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
          {
            id: "dish-agua-sem-gas",
            name: "Água Sem Gás",
            description: "Água mineral sem gás 500ml.",
            imageUrl: "/dishes/agua-sem-gas.webp",
            sizes: [
              {
                name: "500ml",
                price: 4.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
        ],
      },
      {
        id: "cat-sobremesas",
        name: "Sobremesas",

        dishes: [
          {
            id: "dish-harumaki-banana",
            name: "Harumaki de Banana",
            description:
              "Rolinho primavera recheado com banana e açúcar, acompanhado de doce de leite.",
            imageUrl: "/dishes/harumaki-banana.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 12.9,
              },
              {
                name: "Porção (4 unidades)",
                price: 22.9,
                promoPrice: 19.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-doce-de-leite",
                name: "Doce de Leite Extra",
                price: 1.0,
              },
              {
                id: "acc-nutella",
                name: "Nutella",
                price: 2.5,
              },
            ],
            extras: [
              {
                id: "extra-banana",
                name: "Mais Banana",
                price: 2.0,
              },
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
          {
            id: "dish-mochi",
            name: "Mochi de Morango",
            description:
              "Sobremesa japonesa tradicional, recheada com creme de morango.",
            imageUrl: "/dishes/mochi-morango.webp",
            sizes: [
              {
                name: "Unidade",
                price: 9.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-calda-chocolate",
                name: "Calda de Chocolate",
                price: 1.0,
              },
            ],
            extras: [
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
              {
                id: "extra-morango",
                name: "Mais Morango",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
        ],
      },
    ],
  },
  {
    id: "restaurante-burger-king-colombo",
    slug: "burger-king-colombo",
    name: "Burger King - Colombo",
    logoUrl: "/restaurant-logos/burguerking.webp",
    deliveryFee: 0.0,
    deliveryTime: "30-45 min",
    freeDeliveryAbove: 50.0,
    rating: 4.8,
    closingTime: "22:00",
    minOrder: 20.0,
    distance: 3.5,
    isOpen: true,
    categories: [
      {
        id: "cat-niguiris",
        name: "Niguiris",
        description: "deliciosos niguiris com peixe fresco e arroz temperado.",
        dishes: [
          {
            id: "dish-niguiri-salmao",
            name: "Niguiri de Salmão",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
                promoPrice: 12.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-salmao-hot",
            name: "Niguiri Apimentado",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado e molho apimentado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isSpicy: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-veg",
            name: "Niguiri Vegetariano",
            description:
              "Dupla de niguiris vegetarianos com abacate e pepino sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isVegetarian: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-ceviches",
        name: "Ceviches",
        description:
          "um prato super refrescante de peixe fatiado e marinado com limão",
        dishes: [
          {
            id: "dish-ceviche-salmao",
            name: "Ceviche de Salmão",
            description:
              "Cubos de salmão fresco marinados no limão com cebola roxa, pimentão e coentro.",
            imageUrl: "/dishes/ceviche-salmao.webp",
            sizes: [
              {
                name: "Porção Individual",
                price: 28.9,
                promoPrice: 24.9,
              },
              {
                name: "Porção Grande",
                price: 49.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-torradas",
                name: "Torradinhas",
                price: 0.0,
              },
              {
                id: "acc-molho-soja",
                name: "Molho de Soja",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 8.0,
              },
              {
                id: "extra-limao",
                name: "Mais Limão",
                price: 2.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-fork",
                name: "Garfo",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-bebidas",
        name: "Bebidas",
        dishes: [
          {
            id: "dish-coca-lata",
            name: "Coca-Cola Lata",
            description: "Coca-Cola lata 350ml.",
            imageUrl: "/dishes/coca-lata.webp",
            sizes: [
              {
                name: "350ml",
                price: 6.0,
                promoPrice: 5.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
          {
            id: "dish-agua-sem-gas",
            name: "Água Sem Gás",
            description: "Água mineral sem gás 500ml.",
            imageUrl: "/dishes/agua-sem-gas.webp",
            sizes: [
              {
                name: "500ml",
                price: 4.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
        ],
      },
      {
        id: "cat-sobremesas",
        name: "Sobremesas",

        dishes: [
          {
            id: "dish-harumaki-banana",
            name: "Harumaki de Banana",
            description:
              "Rolinho primavera recheado com banana e açúcar, acompanhado de doce de leite.",
            imageUrl: "/dishes/harumaki-banana.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 12.9,
              },
              {
                name: "Porção (4 unidades)",
                price: 22.9,
                promoPrice: 19.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-doce-de-leite",
                name: "Doce de Leite Extra",
                price: 1.0,
              },
              {
                id: "acc-nutella",
                name: "Nutella",
                price: 2.5,
              },
            ],
            extras: [
              {
                id: "extra-banana",
                name: "Mais Banana",
                price: 2.0,
              },
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
          {
            id: "dish-mochi",
            name: "Mochi de Morango",
            description:
              "Sobremesa japonesa tradicional, recheada com creme de morango.",
            imageUrl: "/dishes/mochi-morango.webp",
            sizes: [
              {
                name: "Unidade",
                price: 9.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-calda-chocolate",
                name: "Calda de Chocolate",
                price: 1.0,
              },
            ],
            extras: [
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
              {
                id: "extra-morango",
                name: "Mais Morango",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
        ],
      },
    ],
  },
  {
    id: "restaurante-mcdonalds-novo-centro",
    slug: "mcdonalds-novo-centro",
    name: "McDonald’s - Novo Centro",
    logoUrl: "/restaurant-logos/mcdonalds.webp",
    deliveryFee: 9.3,
    deliveryTime: "30-45 min",
    freeDeliveryAbove: 50.0,
    rating: 4.8,
    closingTime: "22:00",
    minOrder: 20.0,
    distance: 3.5,
    isOpen: true,
    categories: [
      {
        id: "cat-niguiris",
        name: "Niguiris",
        description: "deliciosos niguiris com peixe fresco e arroz temperado.",
        dishes: [
          {
            id: "dish-niguiri-salmao",
            name: "Niguiri de Salmão",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
                promoPrice: 12.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-salmao-hot",
            name: "Niguiri Apimentado",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado e molho apimentado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isSpicy: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-veg",
            name: "Niguiri Vegetariano",
            description:
              "Dupla de niguiris vegetarianos com abacate e pepino sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isVegetarian: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-ceviches",
        name: "Ceviches",
        description:
          "um prato super refrescante de peixe fatiado e marinado com limão",
        dishes: [
          {
            id: "dish-ceviche-salmao",
            name: "Ceviche de Salmão",
            description:
              "Cubos de salmão fresco marinados no limão com cebola roxa, pimentão e coentro.",
            imageUrl: "/dishes/ceviche-salmao.webp",
            sizes: [
              {
                name: "Porção Individual",
                price: 28.9,
                promoPrice: 24.9,
              },
              {
                name: "Porção Grande",
                price: 49.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-torradas",
                name: "Torradinhas",
                price: 0.0,
              },
              {
                id: "acc-molho-soja",
                name: "Molho de Soja",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 8.0,
              },
              {
                id: "extra-limao",
                name: "Mais Limão",
                price: 2.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-fork",
                name: "Garfo",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-bebidas",
        name: "Bebidas",
        dishes: [
          {
            id: "dish-coca-lata",
            name: "Coca-Cola Lata",
            description: "Coca-Cola lata 350ml.",
            imageUrl: "/dishes/coca-lata.webp",
            sizes: [
              {
                name: "350ml",
                price: 6.0,
                promoPrice: 5.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
          {
            id: "dish-agua-sem-gas",
            name: "Água Sem Gás",
            description: "Água mineral sem gás 500ml.",
            imageUrl: "/dishes/agua-sem-gas.webp",
            sizes: [
              {
                name: "500ml",
                price: 4.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
        ],
      },
      {
        id: "cat-sobremesas",
        name: "Sobremesas",

        dishes: [
          {
            id: "dish-harumaki-banana",
            name: "Harumaki de Banana",
            description:
              "Rolinho primavera recheado com banana e açúcar, acompanhado de doce de leite.",
            imageUrl: "/dishes/harumaki-banana.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 12.9,
              },
              {
                name: "Porção (4 unidades)",
                price: 22.9,
                promoPrice: 19.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-doce-de-leite",
                name: "Doce de Leite Extra",
                price: 1.0,
              },
              {
                id: "acc-nutella",
                name: "Nutella",
                price: 2.5,
              },
            ],
            extras: [
              {
                id: "extra-banana",
                name: "Mais Banana",
                price: 2.0,
              },
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
          {
            id: "dish-mochi",
            name: "Mochi de Morango",
            description:
              "Sobremesa japonesa tradicional, recheada com creme de morango.",
            imageUrl: "/dishes/mochi-morango.webp",
            sizes: [
              {
                name: "Unidade",
                price: 9.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-calda-chocolate",
                name: "Calda de Chocolate",
                price: 1.0,
              },
            ],
            extras: [
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
              {
                id: "extra-morango",
                name: "Mais Morango",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
        ],
      },
    ],
  },
  {
    id: "restaurante-subway-avenida-center-3",
    slug: "subway-avenida-center-3",
    name: "Subway - Avenida center",
    logoUrl: "/restaurant-logos/subway.webp",
    deliveryFee: 9.3,
    deliveryTime: "30-45 min",
    freeDeliveryAbove: 50.0,
    rating: 4.8,
    closingTime: "22:00",
    minOrder: 20.0,
    distance: 3.5,
    isOpen: true,
    categories: [
      {
        id: "cat-niguiris",
        name: "Niguiris",
        description: "deliciosos niguiris com peixe fresco e arroz temperado.",
        dishes: [
          {
            id: "dish-niguiri-salmao",
            name: "Niguiri de Salmão",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
                promoPrice: 12.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-salmao-hot",
            name: "Niguiri Apimentado",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado e molho apimentado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isSpicy: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-veg",
            name: "Niguiri Vegetariano",
            description:
              "Dupla de niguiris vegetarianos com abacate e pepino sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isVegetarian: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-ceviches",
        name: "Ceviches",
        description:
          "um prato super refrescante de peixe fatiado e marinado com limão",
        dishes: [
          {
            id: "dish-ceviche-salmao",
            name: "Ceviche de Salmão",
            description:
              "Cubos de salmão fresco marinados no limão com cebola roxa, pimentão e coentro.",
            imageUrl: "/dishes/ceviche-salmao.webp",
            sizes: [
              {
                name: "Porção Individual",
                price: 28.9,
                promoPrice: 24.9,
              },
              {
                name: "Porção Grande",
                price: 49.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-torradas",
                name: "Torradinhas",
                price: 0.0,
              },
              {
                id: "acc-molho-soja",
                name: "Molho de Soja",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 8.0,
              },
              {
                id: "extra-limao",
                name: "Mais Limão",
                price: 2.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-fork",
                name: "Garfo",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-bebidas",
        name: "Bebidas",
        dishes: [
          {
            id: "dish-coca-lata",
            name: "Coca-Cola Lata",
            description: "Coca-Cola lata 350ml.",
            imageUrl: "/dishes/coca-lata.webp",
            sizes: [
              {
                name: "350ml",
                price: 6.0,
                promoPrice: 5.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
          {
            id: "dish-agua-sem-gas",
            name: "Água Sem Gás",
            description: "Água mineral sem gás 500ml.",
            imageUrl: "/dishes/agua-sem-gas.webp",
            sizes: [
              {
                name: "500ml",
                price: 4.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
        ],
      },
      {
        id: "cat-sobremesas",
        name: "Sobremesas",

        dishes: [
          {
            id: "dish-harumaki-banana",
            name: "Harumaki de Banana",
            description:
              "Rolinho primavera recheado com banana e açúcar, acompanhado de doce de leite.",
            imageUrl: "/dishes/harumaki-banana.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 12.9,
              },
              {
                name: "Porção (4 unidades)",
                price: 22.9,
                promoPrice: 19.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-doce-de-leite",
                name: "Doce de Leite Extra",
                price: 1.0,
              },
              {
                id: "acc-nutella",
                name: "Nutella",
                price: 2.5,
              },
            ],
            extras: [
              {
                id: "extra-banana",
                name: "Mais Banana",
                price: 2.0,
              },
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
          {
            id: "dish-mochi",
            name: "Mochi de Morango",
            description:
              "Sobremesa japonesa tradicional, recheada com creme de morango.",
            imageUrl: "/dishes/mochi-morango.webp",
            sizes: [
              {
                name: "Unidade",
                price: 9.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-calda-chocolate",
                name: "Calda de Chocolate",
                price: 1.0,
              },
            ],
            extras: [
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
              {
                id: "extra-morango",
                name: "Mais Morango",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
        ],
      },
    ],
  },
  {
    id: "restaurante-matsuri-concept-2",
    slug: "matsuri-concept-2",
    name: "Matsuri Concept",
    logoUrl: "/restaurant-logos/matsuriconcept.webp",
    deliveryFee: 5.0,
    deliveryTime: "30-45 min",
    freeDeliveryAbove: 50.0,
    rating: 4.8,
    closingTime: "22:00",
    minOrder: 20.0,
    distance: 3.5,
    isOpen: false,
    categories: [
      {
        id: "cat-niguiris",
        name: "Niguiris",
        description: "deliciosos niguiris com peixe fresco e arroz temperado.",
        dishes: [
          {
            id: "dish-niguiri-salmao",
            name: "Niguiri de Salmão",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
                promoPrice: 12.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-salmao-hot",
            name: "Niguiri Apimentado",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado e molho apimentado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isSpicy: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-veg",
            name: "Niguiri Vegetariano",
            description:
              "Dupla de niguiris vegetarianos com abacate e pepino sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isVegetarian: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-ceviches",
        name: "Ceviches",
        description:
          "um prato super refrescante de peixe fatiado e marinado com limão",
        dishes: [
          {
            id: "dish-ceviche-salmao",
            name: "Ceviche de Salmão",
            description:
              "Cubos de salmão fresco marinados no limão com cebola roxa, pimentão e coentro.",
            imageUrl: "/dishes/ceviche-salmao.webp",
            sizes: [
              {
                name: "Porção Individual",
                price: 28.9,
                promoPrice: 24.9,
              },
              {
                name: "Porção Grande",
                price: 49.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-torradas",
                name: "Torradinhas",
                price: 0.0,
              },
              {
                id: "acc-molho-soja",
                name: "Molho de Soja",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 8.0,
              },
              {
                id: "extra-limao",
                name: "Mais Limão",
                price: 2.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-fork",
                name: "Garfo",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-bebidas",
        name: "Bebidas",
        dishes: [
          {
            id: "dish-coca-lata",
            name: "Coca-Cola Lata",
            description: "Coca-Cola lata 350ml.",
            imageUrl: "/dishes/coca-lata.webp",
            sizes: [
              {
                name: "350ml",
                price: 6.0,
                promoPrice: 5.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
          {
            id: "dish-agua-sem-gas",
            name: "Água Sem Gás",
            description: "Água mineral sem gás 500ml.",
            imageUrl: "/dishes/agua-sem-gas.webp",
            sizes: [
              {
                name: "500ml",
                price: 4.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
        ],
      },
      {
        id: "cat-sobremesas",
        name: "Sobremesas",

        dishes: [
          {
            id: "dish-harumaki-banana",
            name: "Harumaki de Banana",
            description:
              "Rolinho primavera recheado com banana e açúcar, acompanhado de doce de leite.",
            imageUrl: "/dishes/harumaki-banana.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 12.9,
              },
              {
                name: "Porção (4 unidades)",
                price: 22.9,
                promoPrice: 19.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-doce-de-leite",
                name: "Doce de Leite Extra",
                price: 1.0,
              },
              {
                id: "acc-nutella",
                name: "Nutella",
                price: 2.5,
              },
            ],
            extras: [
              {
                id: "extra-banana",
                name: "Mais Banana",
                price: 2.0,
              },
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
          {
            id: "dish-mochi",
            name: "Mochi de Morango",
            description:
              "Sobremesa japonesa tradicional, recheada com creme de morango.",
            imageUrl: "/dishes/mochi-morango.webp",
            sizes: [
              {
                name: "Unidade",
                price: 9.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-calda-chocolate",
                name: "Calda de Chocolate",
                price: 1.0,
              },
            ],
            extras: [
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
              {
                id: "extra-morango",
                name: "Mais Morango",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
        ],
      },
    ],
  },
  {
    id: "restaurante-subway-avenida-center-2",
    slug: "subway-avenida-center-2",
    name: "Subway - Avenida center",
    logoUrl: "/restaurant-logos/subway.webp",
    deliveryFee: 0.0,
    deliveryTime: "30-45 min",
    freeDeliveryAbove: 50.0,
    rating: 4.8,
    closingTime: "22:00",
    minOrder: 20.0,
    distance: 3.5,
    isOpen: false,
    categories: [
      {
        id: "cat-niguiris",
        name: "Niguiris",
        description: "deliciosos niguiris com peixe fresco e arroz temperado.",
        dishes: [
          {
            id: "dish-niguiri-salmao",
            name: "Niguiri de Salmão",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
                promoPrice: 12.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-salmao-hot",
            name: "Niguiri Apimentado",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado e molho apimentado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isSpicy: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-veg",
            name: "Niguiri Vegetariano",
            description:
              "Dupla de niguiris vegetarianos com abacate e pepino sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isVegetarian: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-ceviches",
        name: "Ceviches",
        description:
          "um prato super refrescante de peixe fatiado e marinado com limão",
        dishes: [
          {
            id: "dish-ceviche-salmao",
            name: "Ceviche de Salmão",
            description:
              "Cubos de salmão fresco marinados no limão com cebola roxa, pimentão e coentro.",
            imageUrl: "/dishes/ceviche-salmao.webp",
            sizes: [
              {
                name: "Porção Individual",
                price: 28.9,
                promoPrice: 24.9,
              },
              {
                name: "Porção Grande",
                price: 49.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-torradas",
                name: "Torradinhas",
                price: 0.0,
              },
              {
                id: "acc-molho-soja",
                name: "Molho de Soja",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 8.0,
              },
              {
                id: "extra-limao",
                name: "Mais Limão",
                price: 2.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-fork",
                name: "Garfo",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-bebidas",
        name: "Bebidas",
        dishes: [
          {
            id: "dish-coca-lata",
            name: "Coca-Cola Lata",
            description: "Coca-Cola lata 350ml.",
            imageUrl: "/dishes/coca-lata.webp",
            sizes: [
              {
                name: "350ml",
                price: 6.0,
                promoPrice: 5.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
          {
            id: "dish-agua-sem-gas",
            name: "Água Sem Gás",
            description: "Água mineral sem gás 500ml.",
            imageUrl: "/dishes/agua-sem-gas.webp",
            sizes: [
              {
                name: "500ml",
                price: 4.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
        ],
      },
      {
        id: "cat-sobremesas",
        name: "Sobremesas",

        dishes: [
          {
            id: "dish-harumaki-banana",
            name: "Harumaki de Banana",
            description:
              "Rolinho primavera recheado com banana e açúcar, acompanhado de doce de leite.",
            imageUrl: "/dishes/harumaki-banana.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 12.9,
              },
              {
                name: "Porção (4 unidades)",
                price: 22.9,
                promoPrice: 19.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-doce-de-leite",
                name: "Doce de Leite Extra",
                price: 1.0,
              },
              {
                id: "acc-nutella",
                name: "Nutella",
                price: 2.5,
              },
            ],
            extras: [
              {
                id: "extra-banana",
                name: "Mais Banana",
                price: 2.0,
              },
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
          {
            id: "dish-mochi",
            name: "Mochi de Morango",
            description:
              "Sobremesa japonesa tradicional, recheada com creme de morango.",
            imageUrl: "/dishes/mochi-morango.webp",
            sizes: [
              {
                name: "Unidade",
                price: 9.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-calda-chocolate",
                name: "Calda de Chocolate",
                price: 1.0,
              },
            ],
            extras: [
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
              {
                id: "extra-morango",
                name: "Mais Morango",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
        ],
      },
    ],
  },
  {
    id: "restaurante-burger-king-colombo-2",
    slug: "burger-king-colombo-2",
    name: "Burger King - Colombo",
    logoUrl: "/restaurant-logos/burguerking.webp",
    deliveryFee: 0.0,
    deliveryTime: "30-45 min",
    freeDeliveryAbove: 50.0,
    rating: 4.8,
    closingTime: "22:00",
    minOrder: 20.0,
    distance: 3.5,
    isOpen: false,
    categories: [
      {
        id: "cat-niguiris",
        name: "Niguiris",
        description: "deliciosos niguiris com peixe fresco e arroz temperado.",
        dishes: [
          {
            id: "dish-niguiri-salmao",
            name: "Niguiri de Salmão",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
                promoPrice: 12.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-salmao-hot",
            name: "Niguiri Apimentado",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado e molho apimentado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isSpicy: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-veg",
            name: "Niguiri Vegetariano",
            description:
              "Dupla de niguiris vegetarianos com abacate e pepino sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isVegetarian: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-ceviches",
        name: "Ceviches",
        description:
          "um prato super refrescante de peixe fatiado e marinado com limão",
        dishes: [
          {
            id: "dish-ceviche-salmao",
            name: "Ceviche de Salmão",
            description:
              "Cubos de salmão fresco marinados no limão com cebola roxa, pimentão e coentro.",
            imageUrl: "/dishes/ceviche-salmao.webp",
            sizes: [
              {
                name: "Porção Individual",
                price: 28.9,
                promoPrice: 24.9,
              },
              {
                name: "Porção Grande",
                price: 49.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-torradas",
                name: "Torradinhas",
                price: 0.0,
              },
              {
                id: "acc-molho-soja",
                name: "Molho de Soja",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 8.0,
              },
              {
                id: "extra-limao",
                name: "Mais Limão",
                price: 2.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-fork",
                name: "Garfo",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-bebidas",
        name: "Bebidas",
        dishes: [
          {
            id: "dish-coca-lata",
            name: "Coca-Cola Lata",
            description: "Coca-Cola lata 350ml.",
            imageUrl: "/dishes/coca-lata.webp",
            sizes: [
              {
                name: "350ml",
                price: 6.0,
                promoPrice: 5.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
          {
            id: "dish-agua-sem-gas",
            name: "Água Sem Gás",
            description: "Água mineral sem gás 500ml.",
            imageUrl: "/dishes/agua-sem-gas.webp",
            sizes: [
              {
                name: "500ml",
                price: 4.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
        ],
      },
      {
        id: "cat-sobremesas",
        name: "Sobremesas",

        dishes: [
          {
            id: "dish-harumaki-banana",
            name: "Harumaki de Banana",
            description:
              "Rolinho primavera recheado com banana e açúcar, acompanhado de doce de leite.",
            imageUrl: "/dishes/harumaki-banana.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 12.9,
              },
              {
                name: "Porção (4 unidades)",
                price: 22.9,
                promoPrice: 19.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-doce-de-leite",
                name: "Doce de Leite Extra",
                price: 1.0,
              },
              {
                id: "acc-nutella",
                name: "Nutella",
                price: 2.5,
              },
            ],
            extras: [
              {
                id: "extra-banana",
                name: "Mais Banana",
                price: 2.0,
              },
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
          {
            id: "dish-mochi",
            name: "Mochi de Morango",
            description:
              "Sobremesa japonesa tradicional, recheada com creme de morango.",
            imageUrl: "/dishes/mochi-morango.webp",
            sizes: [
              {
                name: "Unidade",
                price: 9.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-calda-chocolate",
                name: "Calda de Chocolate",
                price: 1.0,
              },
            ],
            extras: [
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
              {
                id: "extra-morango",
                name: "Mais Morango",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
        ],
      },
    ],
  },
  {
    id: "restaurante-mcdonalds-novo-centro-2",
    slug: "mcdonalds-novo-centro-2",
    name: "McDonald’s - Novo Centro",
    logoUrl: "/restaurant-logos/mcdonalds.webp",
    deliveryFee: 9.3,
    deliveryTime: "30-45 min",
    freeDeliveryAbove: 50.0,
    rating: 4.8,
    closingTime: "22:00",
    minOrder: 20.0,
    distance: 3.5,
    isOpen: false,
    categories: [
      {
        id: "cat-niguiris",
        name: "Niguiris",
        description: "deliciosos niguiris com peixe fresco e arroz temperado.",
        dishes: [
          {
            id: "dish-niguiri-salmao",
            name: "Niguiri de Salmão",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
                promoPrice: 12.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-salmao-hot",
            name: "Niguiri Apimentado",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado e molho apimentado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isSpicy: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-veg",
            name: "Niguiri Vegetariano",
            description:
              "Dupla de niguiris vegetarianos com abacate e pepino sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isVegetarian: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-ceviches",
        name: "Ceviches",
        description:
          "um prato super refrescante de peixe fatiado e marinado com limão",
        dishes: [
          {
            id: "dish-ceviche-salmao",
            name: "Ceviche de Salmão",
            description:
              "Cubos de salmão fresco marinados no limão com cebola roxa, pimentão e coentro.",
            imageUrl: "/dishes/ceviche-salmao.webp",
            sizes: [
              {
                name: "Porção Individual",
                price: 28.9,
                promoPrice: 24.9,
              },
              {
                name: "Porção Grande",
                price: 49.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-torradas",
                name: "Torradinhas",
                price: 0.0,
              },
              {
                id: "acc-molho-soja",
                name: "Molho de Soja",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 8.0,
              },
              {
                id: "extra-limao",
                name: "Mais Limão",
                price: 2.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-fork",
                name: "Garfo",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-bebidas",
        name: "Bebidas",
        dishes: [
          {
            id: "dish-coca-lata",
            name: "Coca-Cola Lata",
            description: "Coca-Cola lata 350ml.",
            imageUrl: "/dishes/coca-lata.webp",
            sizes: [
              {
                name: "350ml",
                price: 6.0,
                promoPrice: 5.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
          {
            id: "dish-agua-sem-gas",
            name: "Água Sem Gás",
            description: "Água mineral sem gás 500ml.",
            imageUrl: "/dishes/agua-sem-gas.webp",
            sizes: [
              {
                name: "500ml",
                price: 4.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
        ],
      },
      {
        id: "cat-sobremesas",
        name: "Sobremesas",

        dishes: [
          {
            id: "dish-harumaki-banana",
            name: "Harumaki de Banana",
            description:
              "Rolinho primavera recheado com banana e açúcar, acompanhado de doce de leite.",
            imageUrl: "/dishes/harumaki-banana.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 12.9,
              },
              {
                name: "Porção (4 unidades)",
                price: 22.9,
                promoPrice: 19.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-doce-de-leite",
                name: "Doce de Leite Extra",
                price: 1.0,
              },
              {
                id: "acc-nutella",
                name: "Nutella",
                price: 2.5,
              },
            ],
            extras: [
              {
                id: "extra-banana",
                name: "Mais Banana",
                price: 2.0,
              },
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
          {
            id: "dish-mochi",
            name: "Mochi de Morango",
            description:
              "Sobremesa japonesa tradicional, recheada com creme de morango.",
            imageUrl: "/dishes/mochi-morango.webp",
            sizes: [
              {
                name: "Unidade",
                price: 9.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-calda-chocolate",
                name: "Calda de Chocolate",
                price: 1.0,
              },
            ],
            extras: [
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
              {
                id: "extra-morango",
                name: "Mais Morango",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
        ],
      },
    ],
  },
  {
    id: "restaurante-subway-avenida-center-4",
    slug: "subway-avenida-center-4",
    name: "Subway - Avenida center",
    logoUrl: "/restaurant-logos/subway.webp",
    deliveryFee: 9.3,
    deliveryTime: "30-45 min",
    freeDeliveryAbove: 50.0,
    rating: 4.8,
    closingTime: "22:00",
    minOrder: 20.0,
    distance: 3.5,
    isOpen: false,
    categories: [
      {
        id: "cat-niguiris",
        name: "Niguiris",
        description: "deliciosos niguiris com peixe fresco e arroz temperado.",
        dishes: [
          {
            id: "dish-niguiri-salmao",
            name: "Niguiri de Salmão",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
                promoPrice: 12.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-salmao-hot",
            name: "Niguiri Apimentado",
            description:
              "Dupla de niguiris de salmão fresco sobre arroz temperado e molho apimentado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isSpicy: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
          {
            id: "dish-niguiri-veg",
            name: "Niguiri Vegetariano",
            description:
              "Dupla de niguiris vegetarianos com abacate e pepino sobre arroz temperado.",
            imageUrl: "/dishes/niguiri-salmao.webp",
            isVegetarian: true,
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 14.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-shoyu",
                name: "Shoyu Tradicional",
                price: 0.0,
              },
              {
                id: "acc-gengibre",
                name: "Gengibre em Conserva",
                price: 0.0,
              },
              {
                id: "acc-wasabi",
                name: "Wasabi",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 6.0,
              },
              {
                id: "extra-arroz",
                name: "Mais Arroz",
                price: 3.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-chopsticks",
                name: "Hashis",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-ceviches",
        name: "Ceviches",
        description:
          "um prato super refrescante de peixe fatiado e marinado com limão",
        dishes: [
          {
            id: "dish-ceviche-salmao",
            name: "Ceviche de Salmão",
            description:
              "Cubos de salmão fresco marinados no limão com cebola roxa, pimentão e coentro.",
            imageUrl: "/dishes/ceviche-salmao.webp",
            sizes: [
              {
                name: "Porção Individual",
                price: 28.9,
                promoPrice: 24.9,
              },
              {
                name: "Porção Grande",
                price: 49.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-torradas",
                name: "Torradinhas",
                price: 0.0,
              },
              {
                id: "acc-molho-soja",
                name: "Molho de Soja",
                price: 0.0,
              },
            ],
            extras: [
              {
                id: "extra-salmao",
                name: "Mais Salmão",
                price: 8.0,
              },
              {
                id: "extra-limao",
                name: "Mais Limão",
                price: 2.0,
              },
            ],
            cutlery: [
              {
                id: "cutlery-fork",
                name: "Garfo",
                price: 0.0,
              },
            ],
          },
        ],
      },
      {
        id: "cat-bebidas",
        name: "Bebidas",
        dishes: [
          {
            id: "dish-coca-lata",
            name: "Coca-Cola Lata",
            description: "Coca-Cola lata 350ml.",
            imageUrl: "/dishes/coca-lata.webp",
            sizes: [
              {
                name: "350ml",
                price: 6.0,
                promoPrice: 5.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
          {
            id: "dish-agua-sem-gas",
            name: "Água Sem Gás",
            description: "Água mineral sem gás 500ml.",
            imageUrl: "/dishes/agua-sem-gas.webp",
            sizes: [
              {
                name: "500ml",
                price: 4.0,
              },
            ],
            accompaniments: [],
            extras: [],
            cutlery: [],
          },
        ],
      },
      {
        id: "cat-sobremesas",
        name: "Sobremesas",

        dishes: [
          {
            id: "dish-harumaki-banana",
            name: "Harumaki de Banana",
            description:
              "Rolinho primavera recheado com banana e açúcar, acompanhado de doce de leite.",
            imageUrl: "/dishes/harumaki-banana.webp",
            sizes: [
              {
                name: "Porção (2 unidades)",
                price: 12.9,
              },
              {
                name: "Porção (4 unidades)",
                price: 22.9,
                promoPrice: 19.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-doce-de-leite",
                name: "Doce de Leite Extra",
                price: 1.0,
              },
              {
                id: "acc-nutella",
                name: "Nutella",
                price: 2.5,
              },
            ],
            extras: [
              {
                id: "extra-banana",
                name: "Mais Banana",
                price: 2.0,
              },
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
          {
            id: "dish-mochi",
            name: "Mochi de Morango",
            description:
              "Sobremesa japonesa tradicional, recheada com creme de morango.",
            imageUrl: "/dishes/mochi-morango.webp",
            sizes: [
              {
                name: "Unidade",
                price: 9.9,
              },
            ],
            accompaniments: [
              {
                id: "acc-calda-chocolate",
                name: "Calda de Chocolate",
                price: 1.0,
              },
            ],
            extras: [
              {
                id: "extra-sorvete",
                name: "Bola de Sorvete",
                price: 3.0,
              },
              {
                id: "extra-morango",
                name: "Mais Morango",
                price: 3.0,
              },
            ],
            cutlery: [],
          },
        ],
      },
    ],
  },
];

export const getRestaurants = (): Restaurant[] => {
  return mockedData;
};

export const getRestaurantById = (id: string): Restaurant | undefined => {
  return mockedData.find((restaurant) => restaurant.id === id);
};
