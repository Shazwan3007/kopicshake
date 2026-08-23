"use strict";


/* =========================================================
   BUSINESS CONFIG
========================================================= */

const BUSINESS_NAME = "Kopi C Shake";

const WHATSAPP_NUMBER = "0134698137";


function normalizeMalaysiaPhone(phone) {
  const digits = String(phone).replace(/\D/g, "");

  if (digits.startsWith("60")) {
    return digits;
  }

  if (digits.startsWith("0")) {
    return `6${digits}`;
  }

  return digits;
}


const CLEAN_PHONE =
  normalizeMalaysiaPhone(WHATSAPP_NUMBER);


/* =========================================================
   MENU DATA
========================================================= */

const menuItems = [

  /* ========================
     KOPI C SHAKE
  ======================== */

  {
    id: 1,
    name: "Kopi C Shake Classic Ori",
    category: "Kopi C Shake",
    price: 4.90,
    description: "Pilihan kopi sejuk dengan rasa klasik.",
    image: "images/kopi-classic-ori.jpg",
    badge: "Klasik"
  },

  {
    id: 2,
    name: "Kopi C Shake Classic Creamy",
    category: "Kopi C Shake",
    price: 4.90,
    description: "Versi creamy yang dinyatakan tanpa gula pada menu.",
    image: "images/kopi-classic-creamy.jpg",
    badge: "Tanpa Gula"
  },

  {
    id: 3,
    name: "Kopi C Shake Hazelnut",
    category: "Kopi C Shake",
    price: 5.90,
    description: "Kopi sejuk dengan perisa hazelnut.",
    image: "images/kopi-hazelnut.jpg",
    badge: ""
  },

  {
    id: 4,
    name: "Kopi C Shake Caramel",
    category: "Kopi C Shake",
    price: 5.90,
    description: "Kopi sejuk dengan sentuhan perisa caramel.",
    image: "images/kopi-caramel.jpg",
    badge: ""
  },

  {
    id: 5,
    name: "Kopi C Shake Salted Caramel",
    category: "Kopi C Shake",
    price: 5.90,
    description: "Gabungan kopi sejuk dan perisa salted caramel.",
    image: "images/kopi-salted-caramel.jpg",
    badge: ""
  },

  {
    id: 6,
    name: "Kopi C Shake Butterscotch",
    category: "Kopi C Shake",
    price: 5.90,
    description: "Kopi sejuk dengan perisa butterscotch.",
    image: "images/kopi-butterscotch.jpg",
    badge: ""
  },

  {
    id: 7,
    name: "Kopi C Shake Gula Melaka",
    category: "Kopi C Shake",
    price: 6.90,
    description: "Pilihan kopi dengan perisa gula Melaka.",
    image: "images/kopi-gula-melaka.jpg",
    badge: ""
  },

  {
    id: 8,
    name: "Kopi C Shake Santan",
    category: "Kopi C Shake",
    price: 6.90,
    description: "Kopi C Shake dengan pilihan perisa santan.",
    image: "images/kopi-santan.jpg",
    badge: ""
  },

  {
    id: 9,
    name: "Kopi C Shake Strawberry",
    category: "Kopi C Shake",
    price: 6.90,
    description: "Kopi C Shake dengan perisa strawberry.",
    image: "images/kopi-strawberry.jpg",
    badge: ""
  },

  {
    id: 10,
    name: "Kopi C Shake Oreo",
    category: "Kopi C Shake",
    price: 6.90,
    description: "Kopi C Shake dengan pilihan perisa Oreo.",
    image: "images/kopi-oreo.jpg",
    badge: ""
  },


  /* ========================
     MATCHA
  ======================== */

  {
    id: 11,
    name: "Matcha Classic Ori",
    category: "Matcha",
    price: 4.90,
    description: "Pilihan matcha klasik.",
    image: "images/matcha-classic-ori.jpg",
    badge: "Klasik"
  },

  {
    id: 12,
    name: "Matcha Hazelnut",
    category: "Matcha",
    price: 5.90,
    description: "Matcha dengan perisa hazelnut.",
    image: "images/matcha-hazelnut.jpg",
    badge: ""
  },

  {
    id: 13,
    name: "Matcha Caramel",
    category: "Matcha",
    price: 5.90,
    description: "Matcha sejuk dengan perisa caramel.",
    image: "images/matcha-caramel.jpg",
    badge: ""
  },

  {
    id: 14,
    name: "Matcha Salted Caramel",
    category: "Matcha",
    price: 5.90,
    description: "Matcha dengan perisa salted caramel.",
    image: "images/matcha-salted-caramel.jpg",
    badge: ""
  },

  {
    id: 15,
    name: "Matcha Butterscotch",
    category: "Matcha",
    price: 5.90,
    description: "Matcha dengan perisa butterscotch.",
    image: "images/matcha-butterscotch.jpg",
    badge: ""
  },

  {
    id: 16,
    name: "Matcha Strawberry",
    category: "Matcha",
    price: 6.90,
    description: "Gabungan matcha dan perisa strawberry.",
    image: "images/matcha-strawberry.jpg",
    badge: ""
  },

  {
    id: 17,
    name: "Matcha Mango",
    category: "Matcha",
    price: 6.90,
    description: "Gabungan matcha dan perisa mangga.",
    image: "images/matcha-mango.jpg",
    badge: ""
  },

  {
    id: 18,
    name: "Matcha Oreo",
    category: "Matcha",
    price: 6.90,
    description: "Matcha dengan pilihan perisa Oreo.",
    image: "images/matcha-oreo.jpg",
    badge: ""
  },


  /* ========================
     MILKY SERIES
  ======================== */

  {
    id: 19,
    name: "Strawberry Milk",
    category: "Milky Series",
    price: 5.90,
    description: "Minuman susu dengan perisa strawberry.",
    image: "images/strawberry-milk.jpg",
    badge: ""
  },

  {
    id: 20,
    name: "Green Apple Milk",
    category: "Milky Series",
    price: 5.90,
    description: "Minuman susu dengan perisa green apple.",
    image: "images/green-apple-milk.jpg",
    badge: ""
  },

  {
    id: 21,
    name: "Caramel Milk",
    category: "Milky Series",
    price: 5.90,
    description: "Minuman susu dengan perisa caramel.",
    image: "images/caramel-milk.jpg",
    badge: ""
  },

  {
    id: 22,
    name: "Mango Milk",
    category: "Milky Series",
    price: 5.90,
    description: "Minuman susu dengan perisa mangga.",
    image: "images/mango-milk.jpg",
    badge: ""
  },


  /* ========================
     MOJITO
  ======================== */

  {
    id: 23,
    name: "Mojito Blue Lemon",
    category: "Mojito",
    price: 5.50,
    description: "Minuman mojito Blue Lemon yang menyegarkan.",
    image: "images/mojito-blue-lemon.jpg",
    badge: ""
  },

  {
    id: 24,
    name: "Mojito Strawberry",
    category: "Mojito",
    price: 5.50,
    description: "Minuman mojito berperisa strawberry.",
    image: "images/mojito-strawberry.jpg",
    badge: ""
  },

  {
    id: 25,
    name: "Mojito Green Apple",
    category: "Mojito",
    price: 5.50,
    description: "Minuman mojito berperisa green apple.",
    image: "images/mojito-green-apple.jpg",
    badge: ""
  },

  {
    id: 26,
    name: "Mojito Mango",
    category: "Mojito",
    price: 5.50,
    description: "Minuman mojito berperisa mangga.",
    image: "images/mojito-mango.jpg",
    badge: ""
  },


  /* ========================
     SHAKEN ICED TEA
  ======================== */

  {
    id: 27,
    name: "Lemon Ice Tea",
    category: "Shaken Iced Tea",
    price: 5.90,
    description: "Iced tea dengan pilihan perisa lemon.",
    image: "images/lemon-ice-tea.jpg",
    badge: ""
  },

  {
    id: 28,
    name: "Green Apple Ice Tea",
    category: "Shaken Iced Tea",
    price: 5.90,
    description: "Iced tea dengan pilihan perisa green apple.",
    image: "images/green-apple-ice-tea.jpg",
    badge: ""
  },

  {
    id: 29,
    name: "Strawberry Ice Tea",
    category: "Shaken Iced Tea",
    price: 5.90,
    description: "Iced tea dengan pilihan perisa strawberry.",
    image: "images/strawberry-ice-tea.jpg",
    badge: ""
  },

  {
    id: 30,
    name: "Mango Ice Tea",
    category: "Shaken Iced Tea",
    price: 5.90,
    description: "Iced tea dengan pilihan perisa mangga.",
    image: "images/mango-ice-tea.jpg",
    badge: ""
  }

];


/* =========================================================
   DOM
========================================================= */

const menuGrid =
  document.getElementById("menuGrid");

const menuFilters =
  document.getElementById("menuFilters");

const menuCount =
  document.getElementById("menuCount");

const emptyState =
  document.getElementById("emptyState");

const orderModal =
  document.getElementById("orderModal");

const closeOrderModalButton =
  document.getElementById("closeOrderModal");

const modalProductImage =
  document.getElementById("modalProductImage");

const modalCategory =
  document.getElementById("modalCategory");

const modalProductName =
  document.getElementById("modalProductName");

const modalUnitPrice =
  document.getElementById("modalUnitPrice");

const qtyMinus =
  document.getElementById("qtyMinus");

const qtyPlus =
  document.getElementById("qtyPlus");

const qtyValue =
  document.getElementById("qtyValue");

const orderNote =
  document.getElementById("orderNote");

const noteCount =
  document.getElementById("noteCount");

const orderTotal =
  document.getElementById("orderTotal");

const confirmOrder =
  document.getElementById("confirmOrder");

const menuToggle =
  document.getElementById("menuToggle");

const mobileMenu =
  document.getElementById("mobileMenu");

const siteHeader =
  document.getElementById("siteHeader");

const welcomeScreen =
  document.getElementById("welcomeScreen");

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const lightboxClose =
  document.getElementById("lightboxClose");


/* =========================================================
   STATE
========================================================= */

let activeCategory =
  "Semua";

let selectedMenuItem =
  null;

let selectedQuantity =
  1;

let lastFocusedElement =
  null;


/* =========================================================
   MONEY FORMAT
========================================================= */

function formatRM(value) {
  return `RM${Number(value).toFixed(2)}`;
}


/* =========================================================
   WHATSAPP
========================================================= */

function openWhatsApp(message) {

  const encodedMessage =
    encodeURIComponent(message);

  const url =
    `https://wa.me/${CLEAN_PHONE}?text=${encodedMessage}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}


function getGeneralWhatsAppMessage() {
  return (
    `Hai ${BUSINESS_NAME}! 👋\n\n` +
    `Saya berminat untuk membuat pesanan. ` +
    `Boleh saya dapatkan maklumat lanjut tentang menu ` +
    `yang tersedia hari ini?`
  );
}


/* =========================================================
   MENU FILTERS
========================================================= */

function getCategories() {
  return [
    "Semua",
    ...new Set(
      menuItems.map(
        item => item.category
      )
    )
  ];
}


function renderFilters() {

  if (!menuFilters) {
    return;
  }

  const categories =
    getCategories();

  menuFilters.innerHTML =
    categories
      .map(category => {

        const active =
          category === activeCategory;

        return `
          <button
            type="button"
            class="filter-button ${active ? "active" : ""}"
            data-category="${category}"
            aria-pressed="${active}"
          >
            ${category}
          </button>
        `;

      })
      .join("");
}


function getFilteredMenuItems() {

  if (activeCategory === "Semua") {
    return menuItems;
  }

  return menuItems.filter(
    item =>
      item.category === activeCategory
  );
}


/* =========================================================
   MENU CARDS
========================================================= */

function renderMenu() {

  if (!menuGrid) {
    return;
  }

  const items =
    getFilteredMenuItems();


  if (menuCount) {

    menuCount.textContent =
      `${items.length} pilihan menu`;

  }


  if (emptyState) {

    emptyState.hidden =
      items.length !== 0;

  }


  menuGrid.innerHTML =
    items
      .map((item, index) => {

        const badge =
          item.badge
            ? `<span class="menu-badge">${item.badge}</span>`
            : "";


        return `
          <article
            class="menu-card reveal"
            style="transition-delay:${Math.min(index * 35, 245)}ms"
          >

            <div class="menu-image-wrap">

              ${badge}

              <img
                src="${item.image}"
                alt="${item.name} Kopi C Shake"
                class="image-fade"
                loading="lazy"
                data-image-name="${item.name}"
              >

            </div>


            <div class="menu-content">

              <span class="menu-category">
                ${item.category}
              </span>


              <h3>
                ${item.name}
              </h3>


              <p class="menu-description">
                ${item.description}
              </p>


              <div class="menu-footer">

                <span class="menu-price">
                  ${formatRM(item.price)}
                </span>


                <button
                  type="button"
                  class="order-button ripple"
                  data-order-id="${item.id}"
                  aria-label="Pesan ${item.name}"
                >
                  Pesan
                </button>

              </div>

            </div>

          </article>
        `;

      })
      .join("");


  bindImageStates(
    menuGrid.querySelectorAll("img")
  );


  observeRevealElements();

}


/* =========================================================
   ORDER MODAL
========================================================= */

function openOrderModal(item) {

  selectedMenuItem =
    item;

  selectedQuantity =
    1;

  lastFocusedElement =
    document.activeElement;


  modalCategory.textContent =
    item.category;

  modalProductName.textContent =
    item.name;

  modalUnitPrice.textContent =
    `${formatRM(item.price)} / minuman`;


  modalProductImage.innerHTML = `
    <img
      src="${item.image}"
      alt="${item.name}"
    >
  `;


  qtyValue.value =
    selectedQuantity;

  qtyValue.textContent =
    selectedQuantity;

  orderNote.value =
    "";

  noteCount.textContent =
    "0";


  updateOrderTotal();


  orderModal.hidden =
    false;

  document.body.classList.add(
    "modal-open"
  );


  setTimeout(() => {

    closeOrderModalButton.focus();

  }, 60);

}


function closeOrderModal() {

  if (!orderModal) {
    return;
  }

  orderModal.hidden =
    true;

  document.body.classList.remove(
    "modal-open"
  );


  if (lastFocusedElement) {

    lastFocusedElement.focus();

  }

}


function updateOrderTotal() {

  if (!selectedMenuItem) {
    return;
  }


  const total =
    selectedMenuItem.price *
    selectedQuantity;


  qtyValue.value =
    selectedQuantity;

  qtyValue.textContent =
    selectedQuantity;


  orderTotal.textContent =
    formatRM(total);

}


function buildOrderMessage() {

  const note =
    orderNote.value.trim();


  const total =
    selectedMenuItem.price *
    selectedQuantity;


  let message =
    `Hai ${BUSINESS_NAME}! 👋\n\n` +

    `Saya ingin membuat pesanan:\n` +

    `🍽️ Menu: ${selectedMenuItem.name}\n` +

    `🔢 Kuantiti: ${selectedQuantity}\n` +

    `💰 Harga: ${formatRM(selectedMenuItem.price)}\n` +

    `💵 Jumlah: ${formatRM(total)}`;


  if (note) {

    message +=
      `\n📝 Nota: ${note}`;

  }


  message +=
    `\n\nBoleh maklumkan cara untuk saya teruskan pesanan? Terima kasih.`;


  return message;
}


/* =========================================================
   MOBILE MENU
========================================================= */

function setMobileMenu(open) {

  menuToggle.classList.toggle(
    "is-open",
    open
  );

  mobileMenu.classList.toggle(
    "is-open",
    open
  );

  menuToggle.setAttribute(
    "aria-expanded",
    String(open)
  );

  mobileMenu.setAttribute(
    "aria-hidden",
    String(!open)
  );


  menuToggle.setAttribute(
    "aria-label",
    open
      ? "Tutup menu navigasi"
      : "Buka menu navigasi"
  );

}


/* =========================================================
   HEADER SCROLL STATE
========================================================= */

function updateHeader() {

  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle(
    "scrolled",
    window.scrollY > 15
  );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function setupActiveNavigation() {

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );


  const navLinks =
    document.querySelectorAll(
      "[data-nav]"
    );


  if (!("IntersectionObserver" in window)) {
    return;
  }


  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }


          navLinks.forEach(link => {

            const isCurrent =
              link.dataset.nav ===
              entry.target.id;


            link.classList.toggle(
              "active",
              isCurrent
            );

          });

        });

      },

      {
        rootMargin:
          "-40% 0px -50% 0px",

        threshold:
          0
      }

    );


  sections.forEach(section => {

    observer.observe(section);

  });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

let revealObserver =
  null;


function setupRevealObserver() {

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  if (
    reduceMotion ||
    !("IntersectionObserver" in window)
  ) {

    document
      .querySelectorAll(".reveal")
      .forEach(element => {

        element.classList.add(
          "revealed"
        );

      });

    return;
  }


  revealObserver =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }


          entry.target.classList.add(
            "revealed"
          );


          revealObserver.unobserve(
            entry.target
          );

        });

      },

      {
        threshold:
          0.1,

        rootMargin:
          "0px 0px -45px 0px"
      }

    );


  observeRevealElements();

}


function observeRevealElements() {

  const elements =
    document.querySelectorAll(
      ".reveal:not(.revealed)"
    );


  if (!revealObserver) {

    elements.forEach(element => {

      element.classList.add(
        "revealed"
      );

    });

    return;
  }


  elements.forEach(element => {

    revealObserver.observe(
      element
    );

  });

}


/* =========================================================
   IMAGE LOAD / ERROR
========================================================= */

function bindImageStates(images) {

  images.forEach(image => {

    const markLoaded =
      () => {

        image.classList.add(
          "is-loaded"
        );

      };


    if (image.complete) {

      if (image.naturalWidth > 0) {

        markLoaded();

      } else {

        replaceBrokenImage(
          image
        );

      }

    } else {

      image.addEventListener(
        "load",
        markLoaded,
        {
          once: true
        }
      );


      image.addEventListener(
        "error",
        () =>
          replaceBrokenImage(image),
        {
          once: true
        }
      );

    }

  });

}


function replaceBrokenImage(image) {

  const parent =
    image.parentElement;


  if (!parent) {

    image.remove();

    return;

  }


  const name =
    image.dataset.imageName ||
    image.alt ||
    "Kopi C Shake";


  const placeholder =
    document.createElement("div");


  placeholder.className =
    "image-placeholder";


  placeholder.textContent =
    name;


  image.replaceWith(
    placeholder
  );

}


/* =========================================================
   LIGHTBOX
========================================================= */

function openLightbox(
  src,
  alt,
  trigger
) {

  lastFocusedElement =
    trigger ||
    document.activeElement;


  lightboxImage.src =
    src;

  lightboxImage.alt =
    alt || "";


  lightbox.hidden =
    false;


  document.body.classList.add(
    "modal-open"
  );


  setTimeout(() => {

    lightboxClose.focus();

  }, 50);

}


function closeLightbox() {

  lightbox.hidden =
    true;


  document.body.classList.remove(
    "modal-open"
  );


  if (lastFocusedElement) {

    lastFocusedElement.focus();

  }

}


/* =========================================================
   RIPPLE EFFECT
========================================================= */

function createRipple(
  event,
  element
) {

  const rect =
    element.getBoundingClientRect();


  const dot =
    document.createElement("span");


  dot.className =
    "ripple-dot";


  dot.style.left =
    `${event.clientX - rect.left}px`;

  dot.style.top =
    `${event.clientY - rect.top}px`;


  element.appendChild(
    dot
  );


  dot.addEventListener(
    "animationend",
    () => dot.remove(),
    {
      once: true
    }
  );

}


/* =========================================================
   GENERAL EVENT DELEGATION
========================================================= */

document.addEventListener(
  "click",
  event => {


    /* CATEGORY FILTER */

    const filter =
      event.target.closest(
        ".filter-button"
      );


    if (filter) {

      activeCategory =
        filter.dataset.category;


      renderFilters();

      renderMenu();

      return;

    }


    /* ORDER BUTTON */

    const orderButton =
      event.target.closest(
        "[data-order-id]"
      );


    if (orderButton) {

      const id =
        Number(
          orderButton.dataset.orderId
        );


      const item =
        menuItems.find(
          menu =>
            menu.id === id
        );


      if (item) {

        openOrderModal(item);

      }

      return;

    }


    /* GENERAL WHATSAPP */

    const whatsappButton =
      event.target.closest(
        ".js-general-whatsapp"
      );


    if (whatsappButton) {

      openWhatsApp(
        getGeneralWhatsAppMessage()
      );

      return;

    }


    /* LIGHTBOX */

    const galleryButton =
      event.target.closest(
        "[data-lightbox]"
      );


    if (galleryButton) {

      openLightbox(
        galleryButton.dataset.lightbox,
        galleryButton.dataset.alt,
        galleryButton
      );

      return;

    }


    /* RIPPLE */

    const rippleElement =
      event.target.closest(
        ".ripple"
      );


    if (rippleElement) {

      createRipple(
        event,
        rippleElement
      );

    }

  }
);


/* =========================================================
   ORDER CONTROLS
========================================================= */

qtyMinus.addEventListener(
  "click",
  () => {

    if (selectedQuantity > 1) {

      selectedQuantity--;

      updateOrderTotal();

    }

  }
);


qtyPlus.addEventListener(
  "click",
  () => {

    if (selectedQuantity < 99) {

      selectedQuantity++;

      updateOrderTotal();

    }

  }
);


orderNote.addEventListener(
  "input",
  () => {

    noteCount.textContent =
      String(orderNote.value.length);

  }
);


closeOrderModalButton.addEventListener(
  "click",
  closeOrderModal
);


orderModal.addEventListener(
  "click",
  event => {

    if (event.target === orderModal) {

      closeOrderModal();

    }

  }
);


/* =========================================================
   CONFIRM ORDER
========================================================= */

confirmOrder.addEventListener(
  "click",
  () => {

    if (!selectedMenuItem) {
      return;
    }


    const originalContent =
      confirmOrder.innerHTML;


    confirmOrder.disabled =
      true;


    confirmOrder.innerHTML = `
      <span class="button-content">
        Membuka WhatsApp…
      </span>
    `;


    const message =
      buildOrderMessage();


    setTimeout(() => {

      openWhatsApp(
        message
      );


      confirmOrder.disabled =
        false;


      confirmOrder.innerHTML =
        originalContent;

    }, 350);

  }
);


/* =========================================================
   MOBILE NAV
========================================================= */

menuToggle.addEventListener(
  "click",
  () => {

    const open =
      menuToggle.getAttribute(
        "aria-expanded"
      ) !== "true";


    setMobileMenu(open);

  }
);


mobileMenu.addEventListener(
  "click",
  event => {

    if (
      event.target.closest("a")
    ) {

      setMobileMenu(false);

    }

  }
);


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

document.addEventListener(
  "click",
  event => {

    const anchor =
      event.target.closest(
        'a[href^="#"]'
      );


    if (!anchor) {
      return;
    }


    const href =
      anchor.getAttribute("href");


    if (
      !href ||
      href === "#"
    ) {
      return;
    }


    const target =
      document.querySelector(href);


    if (!target) {
      return;
    }


    event.preventDefault();


    const headerHeight =
      siteHeader
        ? siteHeader.offsetHeight
        : 0;


    const top =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      12;


    window.scrollTo({
      top,
      behavior:
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth"
    });


    setMobileMenu(false);

  }
);


/* =========================================================
   LIGHTBOX EVENTS
========================================================= */

lightboxClose.addEventListener(
  "click",
  closeLightbox
);


lightbox.addEventListener(
  "click",
  event => {

    if (event.target === lightbox) {

      closeLightbox();

    }

  }
);


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") {
      return;
    }


    if (
      !orderModal.hidden
    ) {

      closeOrderModal();

      return;

    }


    if (
      !lightbox.hidden
    ) {

      closeLightbox();

      return;

    }


    if (
      mobileMenu.classList.contains(
        "is-open"
      )
    ) {

      setMobileMenu(false);

      menuToggle.focus();

    }

  }
);


/* =========================================================
   HEADER SCROLL
========================================================= */

let scrollTicking =
  false;


window.addEventListener(
  "scroll",
  () => {

    if (scrollTicking) {
      return;
    }


    scrollTicking =
      true;


    requestAnimationFrame(
      () => {

        updateHeader();

        scrollTicking =
          false;

      }
    );

  },

  {
    passive: true
  }
);


/* =========================================================
   WELCOME SCREEN
========================================================= */

function hideWelcomeScreen() {

  if (!welcomeScreen) {
    return;
  }


  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  const delay =
    reduceMotion
      ? 250
      : 1900;


  setTimeout(() => {

    welcomeScreen.classList.add(
      "is-hidden"
    );


    setTimeout(() => {

      welcomeScreen.hidden =
        true;

    }, 600);

  }, delay);

}


/* =========================================================
   INITIALIZE
========================================================= */

function initializeWebsite() {

  /* COPYRIGHT */

  const currentYear =
    document.getElementById(
      "currentYear"
    );


  if (currentYear) {

    currentYear.textContent =
      String(
        new Date().getFullYear()
      );

  }


  /* MENU */

  renderFilters();

  renderMenu();


  /* IMAGES */

  bindImageStates(
    document.querySelectorAll(
      "img"
    )
  );


  /* ANIMATIONS */

  setupRevealObserver();


  /* ACTIVE NAV */

  setupActiveNavigation();


  /* HEADER */

  updateHeader();


  /* INTRO */

  hideWelcomeScreen();

}


/* =========================================================
   START
========================================================= */

if (
  document.readyState ===
  "loading"
