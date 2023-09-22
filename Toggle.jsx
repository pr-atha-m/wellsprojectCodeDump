const toggleStatus = (index) => {
    // Update the local state
    const newStatus = [...accountStatus];
    newStatus[index] = !newStatus[index];
    setAccountStatus(newStatus);

    // Make a POST request when status is set to false
    if (!newStatus[index]) {
      // Replace with your API endpoint and request configuration
      fetch('/api/updateStatus', {
        method: 'POST',
        body: JSON.stringify({ accountId: userAccounts[index].id }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          // Handle the response as needed
          if (response.status === 200) {
            // Successful POST
          } else {
            // Handle errors
          }
        })
        .catch(error => {
          // Handle network errors
        });
    }
  };
