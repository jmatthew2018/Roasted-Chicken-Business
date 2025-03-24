function openModal(item) {
    document.getElementById("orderText").innerText = "You are about to order: " + item;
    var orderModal = new bootstrap.Modal(document.getElementById("orderModal"));
    orderModal.show();
}
