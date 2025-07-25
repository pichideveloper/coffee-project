// Sistema de cambio de idioma
class LanguageSwitcher {
  constructor() {
    this.currentLanguage = localStorage.getItem("language") || "es";
    this.translations = {
      es: {
        // Navbar
        "nav-inicio": "Inicio",
        "nav-nosotros": "Nosotros",
        "nav-servicios": "Servicios",
        "nav-platos": "Platos",
        "nav-reservas": "Reservas",
        "nav-locales": "Locales",
        "nav-galeria": "Galería",
        "nav-contacto": "Contacto",

        // Hero Section
        "hero-title-1": "Bienvenidos a SAPE",
        "hero-subtitle-1": "Restaurante peruano de platos marinos y criollos",
        "hero-btn-reservar": "Reservar una Mesa",
        "hero-btn-carta": "Ver la Carta",
        "hero-title-2": "Variedad y Tradición",
        "hero-subtitle-2": "Disfruta de nuestros deliciosos platos marinos",
        "hero-title-3": "Ambiente Agradable",
        "hero-subtitle-3": "Disfruta de música en vivo y un ambiente familiar",
        "hero-btn-nosotros": "Sobre Nosotros",

        // About Section
        "about-title": "Sobre Nosotros",
        "about-description":
          '"Somos SAPE, una cadena de restaurantes de sabores marinos y criollos, que te ofrece un ambiente acogedor para todos los paladares, con un servicio personalizado, productos de primera calidad y un equipo humano apasionado y comprometido en superar tus expectativas… ¡Ven a SAPEar!"',
        "about-fresh-title": "Productos Frescos",
        "about-fresh-desc":
          "Seleccionamos los mejores insumos cada día, manteniéndolos frescos en un ambiente limpio y ordenado.",
        "about-innovation-title": "Innovación",
        "about-innovation-desc":
          "Comida peruana con sabor único, innovando en cada preparación para cautivar paladares exigentes.",
        "about-attention-title": "Buena Atención",
        "about-attention-desc":
          "Atención cálida y oportuna: resolvemos tus inquietudes con un servicio de primer nivel.",
        "about-family-title": "Ambiente Familiar",
        "about-family-desc":
          "Un ambiente para sentirse en familia, con estacionamiento, música en vivo, Wi-Fi, baños limpios y más comodidades.",

        // Services Section
        "services-title": "Nuestros Servicios",
        "service-wifi-title": "WIFI Gratis",
        "service-wifi-desc":
          "Conexión a internet de alta velocidad gratuita en todos nuestros locales.",
        "service-parking-title": "Estacionamiento",
        "service-parking-desc":
          "Amplia playa de estacionamiento vigilada disponible para tu comodidad.",
        "service-games-title": "Juegos para Niños",
        "service-games-desc":
          "Área de entretenimiento segura y divertida para los más pequeños de la casa.",
        "service-delivery-title": "Delivery Confiable",
        "service-delivery-desc":
          "Servicio de delivery rápido a domicilio. Central: (044) 216410.",

        // Menu Section
        "menu-title": "La Carta",
        "menu-subtitle":
          "Nuestra cocina rinde homenaje a la tradición limeña y se celebra en la mesa con generosidad.",
        "menu-carta": "La Carta",
        "menu-desserts": "Postres",
        "menu-drinks": "Bebidas y Cócteles",
        "menu-wines": "Vinos",

        // Reservation Section
        "reservation-title": "Reservar una Mesa",
        "reservation-desc":
          "Para reservar una mesa primero llena tus datos. Según el número de personas, paga un adelanto (desde S/20) como consumo. Aceptamos todas las tarjetas. Se te enviará un cupón con un código a tu correo. (Sólo de lunes a viernes.)",
        "form-name": "Nombres Completo",
        "form-lastname": "Apellidos Completo",
        "form-email": "Correo Electrónico",
        "form-phone": "Teléfono",
        "form-people": "N° de Personas",
        "form-select": "Selecciona...",
        "form-people-3": "Hasta 3 personas (S/20)",
        "form-people-6": "Hasta 6 personas (S/35)",
        "form-people-10": "Más de 6 personas (S/50)",
        "form-datetime": "Fecha y Hora",
        "form-location": "Local",
        "location-huanchaco": "Huanchaco",
        "location-santa": "Santa Teresa",
        "btn-confirm": "Confirmar Reserva",

        // Locations Section
        "locations-title": "Nuestros Locales",
        "location-huanchaco-address":
          "Avenida Victor Larco Herrera 812, Huanchaco 13000 (044)278997",
        "location-santa-address":
          "Ca. Algallpampa Mz LL Lt.12, Urb. Santa Teresa (044)215606",
        "btn-maps": "Ver en Maps",

        // Gallery Section
        "gallery-title": "Galería de Fotos",

        // Testimonials Section
        "testimonials-title": "Testimonios de Clientes",
        "testimonial-1":
          '"La comida es exquisita y el servicio impecable. ¡Recomendado!"',
        "testimonial-1-author": "– María G.",
        "testimonial-2":
          '"Ambiente familiar y platos deliciosos. ¡Volveré pronto!"',
        "testimonial-2-author": "- José L.",
        "testimonial-3":
          '"Excelentes ceviches y atención muy amable. ¡Me encantó!"',
        "testimonial-3-author": "– Ana P.",

        // Contact Section
        "contact-title": "Contáctanos",
        "contact-data": "Datos de Contacto",
        "contact-phones": "Teléfonos:",
        "contact-schedule": "Horario de Atención:",
        "contact-schedule-time": "Lunes a Domingo: 9:00am - 5:00pm",
        "contact-write": "Escríbenos",
        "contact-name-placeholder": "Nombre Completo",
        "contact-email-placeholder": "Correo de Contacto",
        "contact-message-placeholder": "Mensaje Detallado",
        "btn-send": "Enviar Mensaje",

        // Nosotros Page
        "nosotros-desc-1":
          "Desde hace más de tres décadas, Restaurante SAPE se ha consolidado como un referente de la gastronomía peruana en nuestra comunidad. Con raíces profundamente tradicionales, nuestra carta está inspirada en recetas heredadas de generación en generación, adaptadas con toques modernos que realzan los sabores sin perder la esencia de cada plato.",
        "nosotros-desc-2":
          "A lo largo de los años, hemos recorrido un camino de innovación constante: introduciendo ingredientes locales autóctonos, reinventando presentaciones y experimentando con técnicas vanguardistas. Esta combinación de tradición y modernidad nos ha permitido mantenernos fieles a nuestras raíces, al mismo tiempo que seguimos sorprendiendo a nuestros comensales más exigentes.",
        "nosotros-desc-3":
          "Restaurante SAPE no solo es un espacio para disfrutar de la mejor comida peruana, sino también un punto de encuentro querido por la comunidad. Celebramos fiestas tradicionales, colaboramos con productores locales y participamos en eventos culturales que promueven nuestra identidad. Cada visita es una experiencia para compartir, donde la calidez de nuestro equipo y el ambiente acogedor se suman al placer de la buena mesa.",
        "nosotros-mision-title": "Nuestra Misión",
        "nosotros-mision-desc":
          "Ofrecer experiencias culinarias auténticas, combinando la riqueza de la tradición peruana con innovaciones que enriquezcan cada bocado.",
        "nosotros-vision-title": "Nuestra Visión",
        "nosotros-vision-desc":
          "Ser reconocidos como embajadores de la gastronomía peruana, inspirando a futuras generaciones y difundiendo nuestras raíces en todo el mundo.",
        "team-title": "Conoce a nuestro equipo",
        "team-chef-title": "Chef Principal",
        "team-chef-desc":
          "Responsable de la creación y evolución de nuestro menú",
        "team-manager-title": "Gerente General",
        "team-manager-desc":
          "Garantiza un servicio impecable y satisfacción del cliente",
        "team-sommelier-title": "Sommelier",
        "team-sommelier-desc": "Especialista en maridajes con la copa perfecta",

        // Services Page
        "services-description":
          "En Restaurante SAPE, nos esforzamos por brindarte una experiencia completa y satisfactoria. Descubre los servicios que hemos diseñado pensando en tu comodidad y disfrute.",
        "service-wifi-title": "Conexión WiFi de Alta Velocidad",
        "service-wifi-desc":
          "Mantente siempre conectado. Ofrecemos acceso a internet de alta velocidad completamente gratuito en todas nuestras instalaciones. Ideal para quienes desean compartir sus momentos especiales, trabajar remotamente o simplemente navegar mientras disfrutan de nuestra gastronomía.",
        "service-wifi-feature-1":
          "Navegación rápida y estable para todos tus dispositivos.",
        "service-wifi-feature-2":
          "Cobertura completa en todas las áreas del restaurante.",
        "service-wifi-feature-3":
          "Conexión segura y de fácil acceso para todos nuestros clientes.",
        "service-parking-title": "Estacionamiento Privado y Seguro",
        "service-parking-desc":
          "Tu comodidad y tranquilidad son nuestra prioridad. Contamos con una amplia playa de estacionamiento privada y vigilada, exclusiva para nuestros clientes. Disfruta de tu visita sabiendo que tu vehículo está en un lugar seguro y de fácil acceso.",
        "service-parking-feature-1":
          "Espacios amplios y bien iluminados para tu conveniencia.",
        "service-parking-feature-2":
          "Personal de vigilancia para garantizar la seguridad.",
        "service-parking-feature-3":
          "Acceso directo y cómodo desde el estacionamiento al restaurante.",
        "service-games-title": "Espacio de Juegos para Niños",
        "service-games-desc":
          "En SAPE pensamos en toda la familia. Hemos diseñado un área de entretenimiento segura, colorida y divertida, especialmente para los más pequeños. Mientras ellos juegan y se divierten, tú puedes relajarte y disfrutar de tu comida con total tranquilidad.",
        "service-games-feature-1":
          "Juegos variados, seguros y adecuados para diferentes edades.",
        "service-games-feature-2":
          "Superficies blandas y diseño seguro para prevenir accidentes.",
        "service-games-feature-3":
          "Un ambiente estimulante para que los niños disfruten al máximo.",
        "service-delivery-title": "Delivery Rápido y Confiable",
        "service-delivery-desc":
          "¿Antojo de SAPE en casa? Nuestro eficiente servicio de delivery lleva la exquisitez de nuestros platos directamente a tu puerta. Realiza tu pedido al (044) 216410 y disfruta de una comida deliciosa sin salir de casa.",
        "service-delivery-feature-1":
          "Entrega puntual en nuestra amplia zona de cobertura.",
        "service-delivery-feature-2":
          "Embalaje cuidadoso para que tus alimentos lleguen perfectos.",
        "service-delivery-feature-3":
          "La misma calidad y sabor de SAPE, ahora en tu hogar u oficina.",

        // Contact Page
        "contact-title": "Contáctanos",
        "contact-subtitle": "¡Tu opinión es importante para nosotros!",
        "contact-write": "Escríbenos",
        "contact-write-desc": "Nos encantaría saber de ti",
        "contact-find-us": "Encuéntranos",
        "contact-here-for-you": "Estamos aquí para atenderte",
        "contact-main-address": "Dirección Principal",
        "contact-address-text": "Av. Perú 123, Lima Centro<br>Lima, Perú",
        "contact-phones": "Teléfonos",
        "contact-our-location": "Nuestra Ubicación",
        "form-name-placeholder": "Ingresa tu nombre completo",
        "form-email-placeholder": "tu@email.com",
        "form-phone-placeholder": "+51 999 999 999",
        "form-message": "Mensaje",
        "form-message-placeholder": "Cuéntanos cómo podemos ayudarte...",

        //Dishes Page
        "dish-ceviche-title": "Ceviche Mixto",
        "dish-ceviche-desc":
          "Pescado fresco, mariscos, leche de tigre, camote, choclo y cancha serrana.",
        "dish-fish-day": "Pesca del día",
        "dish-optional-spice": "Picante opcional",
        "dish-lomo-title": "Lomo Saltado",
        "dish-lomo-desc":
          "Lomo fino saltado con cebolla, tomate, ají amarillo y papas fritas.",
        "dish-chaufa-rice": "Arroz Chaufa Opcional",
        "dish-7colors-desc":
          "Arroz, tallarines rojos, papas a la huancaína, ensalada de beterraga, puré de habas, arroz con aceitunas y pollo al horno.",
        "dish-caviar": "Caviar opcional",

        // Gallery Page
        "gallery-description":
          "Descubre los momentos más especiales de nuestro restaurante. Haz clic en cualquier imagen para verla en grande y navegar por toda la galería.",

        // Locations Page
        "locations-subtitle":
          "Encuéntranos en las mejores ubicaciones de la ciudad.",
        "locations-discover": "Descúbrenos",
        //SiteMap Page
        "sitemap-title-tag": "Sitemap - Café Peruano",
        "sitemap-title": "Mapa del Sitio", // [cite: 9]
        "sitemap-subtitle": "Navegación completa de nuestro sitio web", // [cite: 9]
        "sitemap-structure-title": "Estructura Visual del Sitio", // [cite: 11]
        "sitemap-main-pages": "Páginas Principales", // [cite: 13]
        "sitemap-home": "Inicio", // [cite: 14]
        "sitemap-about-us": "Sobre Nosotros", // [cite: 15]
        "sitemap-contact": "Contacto", // [cite: 16]
        "sitemap-locations-services": "Ubicaciones y Servicios", // [cite: 18]
        "sitemap-our-locations": "Nuestros Locales", // [cite: 19]
        "sitemap-services": "Servicios", // [cite: 20]
        "sitemap-menu-experience": "Menú y Experiencia", // [cite: 22]
        "sitemap-our-menu": "Nuestra Carta", // [cite: 23]
        "sitemap-gallery": "Galería de Fotos", // [cite: 24]
        "sitemap-reservations-navigation": "Reservas y Navegación", // [cite: 25]
        "sitemap-make-reservation": "Hacer Reserva", // [cite: 26]
        "sitemap-sitemap": "Mapa del Sitio", // [cite: 27]
        "sitemap-sitemap-link": "Sitemap",

        // Footer
        "footer-tagline": "Sabores Marinos y Criollos",
        "footer-description":
          "Restaurante peruano que te ofrece un ambiente acogedor para todos los paladares, con productos de primera calidad y un equipo humano apasionado.",
        "footer-quality": "Calidad Premium",
        "footer-family": "Ambiente Familiar",
        "footer-navigation": "Navegación",
        "footer-services": "Servicios",
        "footer-contact": "Contacto",
        "footer-follow": "Síguenos en nuestras redes",
        "footer-payment": "Métodos de pago aceptados",
        "footer-copyright": "Todos los derechos reservados.",
        "footer-made": "Hecho con",
        "footer-peru": "en Perú",
        "footer-secure": "Sitio Seguro",
        "footer-eco": "Eco-Friendly",
        "footer-premium": "Calidad Premium",
      },
      en: {
        // Navbar
        "nav-inicio": "Home",
        "nav-nosotros": "About Us",
        "nav-servicios": "Services",
        "nav-platos": "Dishes",
        "nav-reservas": "Reservations",
        "nav-locales": "Locations",
        "nav-galeria": "Gallery",
        "nav-contacto": "Contact",

        // Hero Section
        "hero-title-1": "Welcome to SAPE",
        "hero-subtitle-1": "Peruvian restaurant with seafood and creole dishes",
        "hero-btn-reservar": "Reserve a Table",
        "hero-btn-carta": "View Menu",
        "hero-title-2": "Variety and Tradition",
        "hero-subtitle-2": "Enjoy our delicious seafood dishes",
        "hero-title-3": "Pleasant Atmosphere",
        "hero-subtitle-3": "Enjoy live music and a family atmosphere",
        "hero-btn-nosotros": "About Us",

        // About Section
        "about-title": "About Us",
        "about-description":
          '"We are SAPE, a chain of restaurants with seafood and creole flavors, offering you a cozy atmosphere for all palates, with personalized service, first-quality products and a passionate human team committed to exceeding your expectations... Come and SAPE!"',
        "about-fresh-title": "Fresh Products",
        "about-fresh-desc":
          "We select the best ingredients every day, keeping them fresh in a clean and organized environment.",
        "about-innovation-title": "Innovation",
        "about-innovation-desc":
          "Peruvian food with unique flavor, innovating in each preparation to captivate demanding palates.",
        "about-attention-title": "Good Service",
        "about-attention-desc":
          "Warm and timely attention: we solve your concerns with first-class service.",
        "about-family-title": "Family Atmosphere",
        "about-family-desc":
          "An atmosphere to feel like family, with parking, live music, Wi-Fi, clean bathrooms and more amenities.",

        // Services Section
        "services-title": "Our Services",
        "service-wifi-title": "Free WIFI",
        "service-wifi-desc":
          "Free high-speed internet connection in all our locations.",
        "service-parking-title": "Parking",
        "service-parking-desc":
          "Large supervised parking area available for your convenience.",
        "service-games-title": "Games for Children",
        "service-games-desc":
          "Safe and fun entertainment area for the little ones in the house.",
        "service-delivery-title": "Reliable Delivery",
        "service-delivery-desc":
          "Fast home delivery service. Central: (044) 216410.",

        // Menu Section
        "menu-title": "The Menu",
        "menu-subtitle":
          "Our kitchen pays homage to Lima tradition and is celebrated at the table with generosity.",
        "menu-carta": "The Menu",
        "menu-desserts": "Desserts",
        "menu-drinks": "Drinks and Cocktails",
        "menu-wines": "Wines",

        // Reservation Section
        "reservation-title": "Reserve a Table",
        "reservation-desc":
          "To reserve a table, first fill in your details. Depending on the number of people, pay an advance (from S/20) as consumption. We accept all cards. A coupon with a code will be sent to your email. (Monday to Friday only.)",
        "form-name": "Full Name",
        "form-lastname": "Full Last Name",
        "form-email": "Email",
        "form-phone": "Phone",
        "form-people": "Number of People",
        "form-select": "Select...",
        "form-people-3": "Up to 3 people (S/20)",
        "form-people-6": "Up to 6 people (S/35)",
        "form-people-10": "More than 6 people (S/50)",
        "form-datetime": "Date and Time",
        "form-location": "Location",
        "location-huanchaco": "Huanchaco",
        "location-santa": "Santa Teresa",
        "btn-confirm": "Confirm Reservation",

        // Locations Section
        "locations-title": "Our Locations",
        "location-huanchaco-address":
          "Victor Larco Herrera Avenue 812, Huanchaco 13000 (044)278997",
        "location-santa-address":
          "Algallpampa St. Block LL Lot 12, Santa Teresa Neighborhood (044)215606",
        "btn-maps": "View on Maps",

        // Gallery Section
        "gallery-title": "Photo Gallery",

        // Testimonials Section
        "testimonials-title": "Customer Testimonials",
        "testimonial-1":
          '"The food is exquisite and the service impeccable. Recommended!"',
        "testimonial-1-author": "– María G.",
        "testimonial-2":
          '"Family atmosphere and delicious dishes. I\'ll be back soon!"',
        "testimonial-2-author": "- José L.",
        "testimonial-3":
          '"Excellent ceviches and very friendly service. I loved it!"',
        "testimonial-3-author": "– Ana P.",

        // Contact Section
        "contact-title": "Contact Us",
        "contact-data": "Contact Information",
        "contact-phones": "Phones:",
        "contact-schedule": "Business Hours:",
        "contact-schedule-time": "Monday to Sunday: 9:00am - 5:00pm",
        "contact-write": "Write to Us",
        "contact-name-placeholder": "Full Name",
        "contact-email-placeholder": "Contact Email",
        "contact-message-placeholder": "Detailed Message",
        "btn-send": "Send Message",

        // Nosotros Page
        "nosotros-desc-1":
          "For more than three decades, Restaurant SAPE has established itself as a reference of Peruvian gastronomy in our community. With deeply traditional roots, our menu is inspired by recipes inherited from generation to generation, adapted with modern touches that enhance flavors without losing the essence of each dish.",
        "nosotros-desc-2":
          "Over the years, we have traveled a path of constant innovation: introducing local indigenous ingredients, reinventing presentations and experimenting with avant-garde techniques. This combination of tradition and modernity has allowed us to remain faithful to our roots, while continuing to surprise our most demanding diners.",
        "nosotros-desc-3":
          "Restaurant SAPE is not only a space to enjoy the best Peruvian food, but also a meeting point beloved by the community. We celebrate traditional festivals, collaborate with local producers and participate in cultural events that promote our identity. Each visit is an experience to share, where the warmth of our team and the welcoming atmosphere add to the pleasure of good food.",
        "nosotros-mision-title": "Our Mission",
        "nosotros-mision-desc":
          "To offer authentic culinary experiences, combining the richness of Peruvian tradition with innovations that enrich each bite.",
        "nosotros-vision-title": "Our Vision",
        "nosotros-vision-desc":
          "To be recognized as ambassadors of Peruvian gastronomy, inspiring future generations and spreading our roots throughout the world.",
        "team-title": "Meet our team",
        "team-chef-title": "Head Chef",
        "team-chef-desc":
          "Responsible for the creation and evolution of our menu",
        "team-manager-title": "General Manager",
        "team-manager-desc":
          "Ensures impeccable service and customer satisfaction",
        "team-sommelier-title": "Sommelier",
        "team-sommelier-desc": "Specialist in pairings with the perfect glass",

        // Services Page
        "services-description":
          "At Restaurant SAPE, we strive to provide you with a complete and satisfactory experience. Discover the services we have designed with your comfort and enjoyment in mind.",
        "service-wifi-title": "High-Speed WiFi Connection",
        "service-wifi-desc":
          "Stay always connected. We offer completely free high-speed internet access in all our facilities. Ideal for those who want to share their special moments, work remotely or simply browse while enjoying our gastronomy.",
        "service-wifi-feature-1":
          "Fast and stable browsing for all your devices.",
        "service-wifi-feature-2":
          "Complete coverage in all areas of the restaurant.",
        "service-wifi-feature-3":
          "Secure and easy access connection for all our customers.",
        "service-parking-title": "Private and Secure Parking",
        "service-parking-desc":
          "Your comfort and peace of mind are our priority. We have a large private and supervised parking area, exclusive for our customers. Enjoy your visit knowing that your vehicle is in a safe and easily accessible place.",
        "service-parking-feature-1":
          "Large and well-lit spaces for your convenience.",
        "service-parking-feature-2": "Security personnel to ensure safety.",
        "service-parking-feature-3":
          "Direct and comfortable access from the parking lot to the restaurant.",
        "service-games-title": "Children's Play Area",
        "service-games-desc":
          "At SAPE we think about the whole family. We have designed a safe, colorful and fun entertainment area, especially for the little ones. While they play and have fun, you can relax and enjoy your meal with complete peace of mind.",
        "service-games-feature-1":
          "Varied, safe games suitable for different ages.",
        "service-games-feature-2":
          "Soft surfaces and safe design to prevent accidents.",
        "service-games-feature-3":
          "A stimulating environment for children to enjoy to the fullest.",
        "service-delivery-title": "Fast and Reliable Delivery",
        "service-delivery-desc":
          "Craving SAPE at home? Our efficient delivery service brings the exquisiteness of our dishes directly to your door. Place your order at (044) 216410 and enjoy delicious food without leaving home.",
        "service-delivery-feature-1":
          "Punctual delivery in our wide coverage area.",
        "service-delivery-feature-2":
          "Careful packaging so your food arrives perfect.",
        "service-delivery-feature-3":
          "The same quality and flavor of SAPE, now in your home or office.",

        // Contact Page
        "contact-title": "Contact Us",
        "contact-subtitle": "Your opinion is important to us!",
        "contact-write": "Write to Us",
        "contact-write-desc": "We would love to hear from you",
        "contact-find-us": "Find Us",
        "contact-here-for-you": "We are here to serve you",
        "contact-main-address": "Main Address",
        "contact-address-text": "Peru Ave. 123, Lima Center<br>Lima, Peru",
        "contact-phones": "Phones",
        "contact-our-location": "Our Location",
        "form-name-placeholder": "Enter your full name",
        "form-email-placeholder": "your@email.com",
        "form-phone-placeholder": "+51 999 999 999",
        "form-message": "Message",
        "form-message-placeholder": "Tell us how we can help you...",

        //Dishes Page
        "menu-title": "Our Menu",
        "menu-subtitle": "Discover the authentic flavors of Peru",

        // Dish Cards
        "dish-ceviche-title": "Mixed Ceviche",
        "dish-ceviche-desc":
          "Fresh fish, seafood, tiger's milk, sweet potato, corn and cancha serrana.",
        "dish-fish-day": "Fish of the day",
        "dish-optional-spice": "Optional spice",
        "dish-lomo-title": "Lomo Saltado",
        "dish-lomo-desc":
          "Stir-fried beef tenderloin with onion, tomato, yellow ají and french fries.",
        "dish-chaufa-rice": "Optional Chaufa Rice",
        "dish-7colors-title": "7 Colors",
        "dish-7colors-desc":
          "Fluffy rice, red noodles, potatoes a la huancaína, beet salad, lima bean puree, rice with olives and baked chicken.",
        "dish-caviar": "Optional caviar",
        // Modal
        "modal-dish-name": "Dish Name",
        "modal-detailed-dish-name": "Detailed Dish Name",
        "modal-detailed-desc": "Detailed description of the dish here...",
        "modal-ingredients-title": "Main Ingredients:",
        "modal-price-title": "Price:",
        "modal-close-btn": "Close",

        //SiteMap Page
        "sitemap-title-tag": "Sitemap - Peruvian Coffee",
        "sitemap-title": "Site Map",
        "sitemap-subtitle": "Complete navigation of our website",
        "sitemap-structure-title": "Visual Site Structure",
        "sitemap-main-pages": "Main Pages",
        "sitemap-home": "Home",
        "sitemap-about-us": "About Us",
        "sitemap-contact": "Contact",
        "sitemap-locations-services": "Locations and Services",
        "sitemap-our-locations": "Our Locations",
        "sitemap-services": "Services",
        "sitemap-menu-experience": "Menu and Experience",
        "sitemap-our-menu": "Our Menu",
        "sitemap-gallery": "Photo Gallery",
        "sitemap-reservations-navigation": "Reservations and Navigation",
        "sitemap-make-reservation": "Make a Reservation",
        "sitemap-sitemap": "Site Map",
        "sitemap-sitemap-link": "Sitemap",

        // Gallery Page
        "gallery-description":
          "Discover the most special moments of our restaurant. Click on any image to see it large and navigate through the entire gallery.",

        // Locations Page
        "locations-subtitle": "Find us in the best locations in the city.",
        "locations-discover": "Discover Us",

        // Footer
        "footer-tagline": "Seafood and Creole Flavors",
        "footer-description":
          "Peruvian restaurant that offers you a cozy atmosphere for all palates, with first-quality products and a passionate human team.",
        "footer-quality": "Premium Quality",
        "footer-family": "Family Atmosphere",
        "footer-navigation": "Navigation",
        "footer-services": "Services",
        "footer-contact": "Contact",
        "footer-follow": "Follow us on our networks",
        "footer-payment": "Accepted payment methods",
        "footer-copyright": "All rights reserved.",
        "footer-made": "Made with",
        "footer-peru": "in Peru",
        "footer-secure": "Secure Site",
        "footer-eco": "Eco-Friendly",
        "footer-premium": "Premium Quality",
      },
    };

    this.init();
  }

  init() {
    this.createLanguageButton();
    this.applyTranslations();
    this.bindEvents();
  }

  createLanguageButton() {
    // Buscar el botón de modo oscuro para posicionar el botón de idioma al lado
    const darkModeButton = document.getElementById("darkModeToggle");
    if (darkModeButton) {
      const languageButton = document.createElement("li");
      languageButton.className = "nav-item";
      languageButton.innerHTML = `
        <div class="language-switcher ms-2">
          <button class="language-btn" id="languageToggle">
            🌍
          </button>
          <div class="language-dropdown" id="languageDropdown">
            <button class="language-option ${
              this.currentLanguage === "es" ? "active" : ""
            }" data-lang="es">🇪🇸 Español</button>
            <button class="language-option ${
              this.currentLanguage === "en" ? "active" : ""
            }" data-lang="en">🇺🇸 English</button>
          </div>
        </div>
      `;

      // Insertar después del botón de modo oscuro
      darkModeButton.parentElement.insertAdjacentElement(
        "afterend",
        languageButton
      );

      // Añadir el emoji del planeta a los elementos de la barra de navegación
      const navItems = document.querySelectorAll(
        ".navbar-nav .nav-item .nav-link"
      );
      navItems.forEach((item) => {
        const text = item.textContent;
        if (
          [
            "Servicios",
            "Nosotros",
            "Platos",
            "Reservas",
            "Locales",
            "Galería",
            "Contacto",
          ].includes(text)
        ) {
          item.innerHTML = `🌍 ${text}`;
        }
      });
    }
  }

  bindEvents() {
    // Toggle dropdown
    document.addEventListener("click", (e) => {
      const languageToggle = document.getElementById("languageToggle");
      const languageDropdown = document.getElementById("languageDropdown");

      if (e.target === languageToggle || languageToggle?.contains(e.target)) {
        e.preventDefault();
        languageDropdown?.classList.toggle("show");
      } else {
        languageDropdown?.classList.remove("show");
      }
    });

    // Handle language selection
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("language-option")) {
        const selectedLang = e.target.getAttribute("data-lang");
        this.changeLanguage(selectedLang);
      }
    });
  }

  changeLanguage(lang) {
    this.currentLanguage = lang;
    localStorage.setItem("language", lang);

    // Update button text
    const currentLangSpan = document.querySelector(".current-lang");
    if (currentLangSpan) {
      currentLangSpan.textContent = lang.toUpperCase();
    }

    // Update active option
    document.querySelectorAll(".language-option").forEach((option) => {
      option.classList.remove("active");
      if (option.getAttribute("data-lang") === lang) {
        option.classList.add("active");
      }
    });

    // Close dropdown
    document.getElementById("languageDropdown")?.classList.remove("show");

    // Apply translations
    this.applyTranslations();
  }

  applyTranslations() {
    const translations = this.translations[this.currentLanguage];

    // Translate all elements with data-translate attribute
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[key]) {
        if (
          element.tagName === "INPUT" &&
          (element.type === "text" || element.type === "email")
        ) {
          element.placeholder = translations[key];
        } else if (element.tagName === "TEXTAREA") {
          element.placeholder = translations[key];
        } else {
          element.textContent = translations[key];
        }
      }
    });
  }
}

// Initialize language switcher when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new LanguageSwitcher();
});
