import React, {useState, createContext} from 'react';

export const ItemContext = createContext();

export const ItemProvider = props => {
    const [items, setItems] = useState({
        books: [
          {id: 101, description: "Lord of the Flies by William Golding", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/books/lord-of-the-flies.png", price: "27.68", category: "Books"},
          {id: 102, description: "Pack Up the Moon by Kristan Higgins", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/books/Pack%20up%20the%20Moon%20by%20Kristan%20Higgins.jpg", price: "19.58", category: "Books"},
          {id: 103, description: "The LowLand by Jhumpa Lahiri", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/books/The%20LowLand%20by%20Jhumpa%20Lahiri.jpg", price: "18.95", category: "Books"}
        ],
        clothing: [
            { id: 111, description: "Black Zipped Jacket", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/clothing/Black%20Zipped%20Jacket.jpeg", price: "49.68", category: "Clothing" },
            { id: 112, description: "Khaki Green Tee", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/clothing/Khaki%20Green%20Tee.jpeg", price: "19.90", category: "clothing" },
            { id: 113, description: "White Cotten Shirt Men", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/clothing/White%20Cotton%20Shirt%20Men%20.jpeg", price: "59.99", category: "Clothing" }
        ],
        electronics: [
            { id: 121, description: "Fujifilm DSLR Camera", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/electronics/Fujifilm%20DSLR%20Camera.jpeg", price: "979.23", category: "Electronics" },
            { id: 122, description: "LG OLED TV 54ich", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/electronics/LG%20OLED%20TV%2054%20ich.jpeg", price: "1169.99", category: "Electronics" },
            { id: 123, description: "Microsoft Surface Go Laptop", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/electronics/Microsoft%20Surface%20Go%20Laptop.jpeg", price: "489.00", category: "Electronics" }
        ],
        shoes: [
            { id: 131, description: "Quirky Running Shoes", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/shoes/Quirky%20Running%20Shoes.jpeg", price: "116.17", category: "Shoes" },
            { id: 132, description: "Vans Canvas Black", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/shoes/Vans%20Canvas%20Black.jpeg", price: "76.49", category: "Shoes"  },
            { id: 133, description: "Vessi Grey Shoes", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/shoes/Vessi%20Grey%20Shoes.jpeg", price: "88.67", category: "Shoes" }
        ]
      });

      const [cart, setCart] = useState([
        {id: 101, description: "Lord of the Flies by William Golding", src: "https://raw.githubusercontent.com/shaunpal/e-commerce-react-native-app/main/assets/pics/books/lord-of-the-flies.png", price: "27.68", category: "Books", qty: 1, total: 27.68 }

      ]);

    return (
        <ItemContext.Provider value={{ myitems: [items, setItems], mycart: [cart, setCart]  }}>
            {props.children}
        </ItemContext.Provider>
    );
}