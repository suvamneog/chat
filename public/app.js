document.querySelectorAll(".del-Button").forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Confirm deletion
        let userConfirmed = confirm("Do you want to delete the chat?");
        if (userConfirmed) {
            console.log("Chat will be deleted");
            event.target.form.submit(); // Submit the form containing this button
        } else {
            console.log("Deletion cancelled");
        }
    });
});