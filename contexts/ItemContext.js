import React, {useState, createContext} from 'react';

export const ItemContext = createContext();

export const ItemProvider = props => {
    const [items, setItems] = useState({
        books: [
          {id: 101, description: "Lord of the Flies by William Golding", src: "file://assets/pics/books/lord-of-the-flies.png", price: "27.68", category: "Books"},
          {id: 102, description: "Pack Up the Moon by Kristan Higgins", src: "file://assets/pics/books/Pack up the Moon by Kristan Higgins.jpg", price: "19.58", category: "Books"},
          {id: 103, description: "The LowLand by Jhumpa Lahiri", src: "file://assets/pics/books/The LowLand by Jhumpa Lahiri.jpg", price: "18.95", category: "Books"}
        ],
        clothing: [
            { id: 111, description: "Black Zipped Jacket", src: "file://assets/pics/clothing/Black Zipped Jacket.jpeg", price: "49.68", category: "Clothing" },
            { id: 112, description: "Khaki Green Tee", src: "file://assets/pics/clothing/Khaki Green Tee.jpeg", price: "19.90", category: "clothing" },
            { id: 113, description: "White Cotten Shirt Men", src: "file://assets/pics/clothing/White Cotton Shirt Men .jpeg", price: "59.99", category: "Clothing" }
        ],
        electronics: [
            { id: 121, description: "Fujifilm DSLR Camera", src: "file://assets/pics/electronics/Fujifilm DSLR Camera.jpeg", price: "979.23", category: "Electronics" },
            { id: 122, description: "LG OLED TV 54ich", src: "file://assets/pics/electronics/LG OLED TV 54 ich.jpeg", price: "1169.99", category: "Electronics" },
            { id: 123, description: "Microsoft Surface Go Laptop", src: "file://assets/pics/electronics/Microsoft Surface Go Laptop.jpeg", price: "489.00", category: "Electronics" }
        ],
        shoes: [
            { id: 131, description: "Quirky Running Shoes", src: "file:///assets/pics/shoes/Quirky Running Shoes.jpeg", price: "116.17", category: "Shoes" },
            { id: 132, description: "Vans Canvas Black", src: "file:///assets/pics/shoes/Vans Canvas Black.jpeg", price: "76.49", category: "Shoes"  },
            { id: 133, description: "Vessi Grey Shoes", src: "file://assets/pics/shoes/Vessi Grey Shoes.jpeg", price: "88.67", category: "Shoes" }
        ]
      });

      const [cart, setCart] = useState([
        {id: 101, description: "Lord of the Flies by William Golding", src: "file://assets/pics/books/lord-of-the-flies.png", price: "27.68", category: "Books", qty: 1, total: 27.68 }

      ]);

    return (
        <ItemContext.Provider value={{ myitems: [items, setItems], mycart: [cart, setCart]  }}>
            {props.children}
        </ItemContext.Provider>
    );
}