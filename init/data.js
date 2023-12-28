const sampleListings = [
    
    {
        title: "Coding Paradise - Developer's Retreat",
        description:
          "Ideal space for programmers looking to focus and code in a serene environment. High-speed internet and a comfortable workspace provided.",
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", // You can fill in the image link later
        price: 8000,
        location: "Silicon Valley",
        country: "United States",
      },
      {
        title: "JavaScript Jungle Studio",
        description:
          "Immerse yourself in the world of JavaScript in this studio designed for coding enthusiasts. Coffee machine and code-friendly atmosphere included.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 9000,
        location: "Seattle",
        country: "United States",
      },
      {
        title: "Python Peak Cabin",
        description:
          "Escape to the Python Peak Cabin, where you can write code surrounded by breathtaking views. Perfect for Python developers seeking inspiration.",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 9500,
        location: "Montana",
        country: "United States",
      },
      {
        title: "Code Haven - Tech Hub Apartment",
        description:
          "A tech-focused apartment for developers. High-speed internet, ergonomic workstations, and a collaborative coding environment.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", // Image link goes here
        price: 8500,
        location: "San Francisco",
        country: "United States",
      },
      {
        title: "Dev Retreat House",
        description:
          "An isolated retreat for programmers seeking uninterrupted focus. Nature surroundings and minimalist design to boost productivity.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 9000,
        location: "Boulder",
        country: "United States",
      },
      {
        title: "AI Innovation Loft",
        description:
          "A loft designed for AI and machine learning enthusiasts. Smart home features and proximity to tech meetups and conferences.",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 9520,
        location: "Palo Alto",
        country: "United States",
      },
      {
        title: "Blockchain Bunker",
        description:
          "Immerse yourself in the world of blockchain in this secure and tech-equipped bunker. Ideal for cryptocurrency developers.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 10100,
        location: "Austin",
        country: "United States",
      },
      {
        title: "Web Developer's Oasis",
        description:
          "Escape to this oasis designed for web developers. A mix of productivity and relaxation with a web-themed interior.",
        image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 8300,
        location: "Portland",
        country: "United States",
      },
      {
        title: "Open Source Cottage",
        description:
          "A cozy cottage dedicated to open-source enthusiasts. Share ideas, collaborate, and contribute to the community.",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 8550,
        location: "Mountain View",
        country: "United States",
      },
      {
        title: "Data Science Den",
        description:
          "Unleash your data science skills in this den equipped with advanced computing resources and data visualization tools.",
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 9950,
        location: "Boston",
        country: "United States",
      },
      {
        title: "VR Coding Studio",
        description:
          "Step into the future with this virtual reality coding studio. Code in a 3D environment and explore new dimensions.",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 11010,
        location: "Los Angeles",
        country: "United States",
      },
      {
        title: "Cybersecurity Castle",
        description:
          "A fortress for cybersecurity experts. Secure your code in this high-tech castle equipped with the latest security measures.",
        image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 12500,
        location: "Seattle",
        country: "United States",
      },
      {
        title: "Gaming Developer Getaway",
        description:
          "Embark on a coding journey in this gaming-focused developer getaway. Dual monitors, gaming consoles, and a gaming-inspired workspace.",
        image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 10800,
        location: "San Diego",
        country: "United States",
      },
      {
        title: "Code Retreat Chalet",
        description:
          "Escape to this coding chalet in the mountains. A perfect blend of code and nature, with stunning views and a cozy workspace.",
        image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", // Image link goes here
        price: 8900,
        location: "Vancouver",
        country: "Canada",
      },
      {
        title: "Cloud Developer Penthouse",
        description:
          "Live above the clouds in this penthouse designed for cloud developers. High-altitude views and cloud-themed interiors.",
        image: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 19200,
        location: "Dubai",
        country: "United Arab Emirates",
      },
      {
        title: "Quantum Coding Observatory",
        description:
          "Dive into quantum computing in this observatory-style workspace. Equipped with quantum computers and a starry view at night.",
        image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 19100,
        location: "Geneva",
        country: "Switzerland",
      },
      {
        title: "Agile Villa",
        description:
          "Experience agility in coding and lifestyle in this villa. Sprint through your projects and relax in the agile-themed surroundings.",
        image: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 18000,
        location: "Barcelona",
        country: "Spain",
      },
      {
        title: "Code & Coffee Condo",
        description:
          "Fuel your coding sessions with endless coffee in this condo. A coffee bar and comfortable workspaces for maximum productivity.",
        image: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 8950,
        location: "Berlin",
        country: "Germany",
      },
      {
        title: "Hackathon Hideaway",
        description:
          "Prepare for your next hackathon in this tech-focused hideaway. 24/7 coding, whiteboard walls, and unlimited snacks.",
        image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 7150,
        location: "Tokyo",
        country: "Japan",
      },
      {
        title: "Embedded Systems Cabin",
        description:
          "Immerse yourself in the world of embedded systems in this cabin. Surrounded by nature and equipped with cutting-edge hardware.",
        image: "https://media.istockphoto.com/id/155278913/photo/emerald-lake-resort-entrance.webp?b=1&s=170667a&w=0&k=20&c=_XW8ZKnAwKXx0LpXwedN_LrxPfeHfYgit7f65vjYsd4=",
        price: 19050,
        location: "Oslo",
        country: "Norway",
      },
      {
        title: "AI Playground Loft",
        description:
          "Play with AI algorithms in this loft. A playful and creative space for AI developers to experiment and innovate.",
        image: "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWluJTIwaG90ZWxzfGVufDB8fDB8fHww%27",
        price: 9980,
        location: "Paris",
        country: "France",
      },
      {
        title: "DevOps Dome",
        description:
          "Optimize your workflows in this DevOps dome. Seamless collaboration, automation, and a 360-degree view of the city.",
        image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 19150,
        location: "Sydney",
        country: "Australia",
      },
    //   {
    //     title: "Flutter Forest Cabin",
    //     description:
    //       "Flutter developers' haven in the forest. Code under the canopy and experience the beauty of mobile app development.",
    //     image: "",
    //     price: 920,
    //     location: "Stockholm",
    //     country: "Sweden",
    //   },
      {
        title: "Rustic Code Cabin",
        description:
          "Unplug and code in this rustic cabin. No distractions, just you and your code surrounded by the tranquility of the woods.",
        image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D", // Image link goes here
        price: 8980,
        location: "Denver",
        country: "United States",
      },
      {
        title: "Server Room Sanctuary",
        description:
          "For sysadmins and server enthusiasts, this sanctuary offers a comfortable retreat with direct access to a state-of-the-art server room.",
        image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 19050,
        location: "London",
        country: "United Kingdom",
      },
      {
        title: "Game Dev Treehouse",
        description:
          "Elevate your game development skills in this treehouse. Panoramic views, game consoles, and a creative atmosphere.",
        image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 9950,
        location: "Toronto",
        country: "Canada",
      },
    //   {
    //     title: "Scala Sky Loft",
    //     description:
    //       "Scale new heights with Scala programming in this sky loft. A modern space with Scala-inspired decor and skyline views.",
    //     image: "",
    //     price: 1100,
    //     location: "Munich",
    //     country: "Germany",
    //   },
      {
        title: "CodeCraft Castle",
        description:
          "Craft your code in this medieval-inspired castle. A unique blend of history and technology for a truly inspiring coding experience.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 18200,
        location: "Edinburgh",
        country: "Scotland",
      },
      {
        title: "AR/VR Developer Den",
        description:
          "Immerse yourself in the world of AR/VR development in this den. VR headsets, AR markers, and a space designed for innovation.",
        image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 9980,
        location: "Austin",
        country: "United States",
      },
      {
        title: "Docker Duplex",
        description:
          "Experience containerization in this Docker duplex. Container-themed architecture and a fully equipped workspace for Docker enthusiasts.",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 19920,
        location: "Amsterdam",
        country: "Netherlands",
      },
      {
        title: "GraphQL Garden Cottage",
        description:
          "Explore the GraphQL garden in this cozy cottage. A perfect setting for GraphQL developers to cultivate their coding skills.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 18990,
        location: "Dublin",
        country: "Ireland",
      },
      {
        title: "Machine Learning Mansion",
        description:
          "Dive deep into machine learning in this mansion. Advanced computing power and a luxurious environment for ML enthusiasts.",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 18300,
        location: "Zurich",
        country: "Switzerland",
      },
  ];
  
  module.exports = { data: sampleListings };