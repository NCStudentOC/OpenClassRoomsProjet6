


// //Ouverture MODAL 1
// export function openModal() {
//     const modal = document.querySelector(".modal");
//     const openButton = document.querySelector(".top_Edition");
//     openButton.addEventListener("click", () => {
//         modal.style.display = "block";

//     });

//     const modal2 = document.querySelector(".modal2")
//     const openModifer = document.querySelector(".iconModification");
//     openModifer.addEventListener("click", () => {
//         modal.style.display = "block";
//         modal2.style.display = "none"
//     });

// }

// // // FERMETURE MODAL 1

// export function closeModal() {
//     const modal = document.querySelector(".modal");
//     const iconClose = document.querySelector(".essai");
//     iconClose.addEventListener("click", () => {

//         modal.style.display = "none";


//     });

//     // // Pas sur la fenetre modalWrapper
//     // const modalWrapper = document.querySelector(".modal_wrapper");
//     // modalWrapper.addEventListener("click", (e) => {
//     //     e.stopPropagation();
//     // });



//     // // //fermeture de la modal par le clic sur la modale grisée

//     window.addEventListener("click", async (e) => {
//         if (e.target === modal) {
//             modal.style.display = "none";
//             e.stopPropagation();
//         }
//     });
// }


// //Ouverture MODAL 2

// export function openModalTwo() {
//     const modal = document.querySelector(".modal")
//     const modal2 = document.querySelector(".modal2")
//     const modalButton = document.querySelector(".modal_btn");
//     modalButton.addEventListener("click", async function () {
//         modal2.style.display = "block";
//         modal.style.display = "none";

//     });
// }




// // //FERMETURE RETOUR MODAL 2
// export function closeModaltwo() {
//     const arrowreturn = document.querySelector(".fa-arrow-left");
//     const modal2 = document.querySelector(".modal2")
//     arrowreturn.addEventListener("click", (e) => {
//         console.log("fleche")
//         // e.stopPropagation();
//         modal2.style.display = "none";
//         modal.style.display = "block";


//     });

//     //fermeture de la modal par la X
//     const modal = document.querySelector(".modal")
//     const iconClose2 = document.querySelector(".icon");
//     iconClose2.addEventListener("click", (e) => {
//         console.log("X")
//         e.stopPropagation();
//         modal2.style.display = "none";
//         // modal.style.display = "none";

//     });

//     // Pas sur la fenetre modalWrapper
//     const modalWrapper = document.querySelector(".modal_wrapper");
//     modalWrapper.addEventListener("click", (e) => {
//         e.stopPropagation();
//     });

//     //fermeture de la modal par le clic sur la modale grisée
//     document.addEventListener("click", (e) => {
//         const modal2 = document.querySelector(".modal2");
//         if (modal2.contains(e.target)) {
//             modal2.style.display = "none";
//             modal.style.display = "none";
//             e.stopPropagation();
//         }
//     });
// }
