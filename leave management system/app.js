document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulate a successful login for demonstration
    if (username === 'akilan' && password === 'password') {
        localStorage.setItem('token', 'dummy-token');
        document.getElementById('login').style.display = 'none';
        document.getElementById('leave').style.display = 'block';
        document.getElementById('balance').style.display = 'block';
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('leaveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const leaveType = document.getElementById('leaveType').value;
    const leaveDays = document.getElementById('leaveDays').value;
    const leaveLetter = document.getElementById('leaveLetter').files[0];
    
    const token = localStorage.getItem('token');
    
    if (token) {
        const leaveApplications = JSON.parse(localStorage.getItem('leaveApplications')) || [];
        const reader = new FileReader();
        reader.onload = function() {
            const leaveData = {
                type: leaveType,
                days: leaveDays,
                leaveLetter: reader.result
            };
            leaveApplications.push(leaveData);
            localStorage.setItem('leaveApplications', JSON.stringify(leaveApplications));
            alert('Leave applied successfully');
        };
        reader.readAsDataURL(leaveLetter);
    } else {
        alert('User not authenticated');
    }
});

document.getElementById('viewBalanceButton').addEventListener('click', function() {
    const token = localStorage.getItem('token');
    
    if (token) {
        const leaveApplications = JSON.parse(localStorage.getItem('leaveApplications')) || [];
        const balance = {
            casual: 10 - leaveApplications.filter(leave => leave.type === 'casual').reduce((sum, leave) => sum + parseInt(leave.days), 0),
            medical: 10 - leaveApplications.filter(leave => leave.type === 'medical').reduce((sum, leave) => sum + parseInt(leave.days), 0)
        };
        const balanceDiv = document.getElementById('leaveBalance');
        balanceDiv.innerHTML = `
            <p>Casual Leave: ${balance.casual} days remaining</p>
            <p>Medical Leave: ${balance.medical} days remaining</p>
        `;
    } else {
        alert('User not authenticated');
    }
});
