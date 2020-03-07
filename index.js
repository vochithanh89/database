/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
var readlineSync = require('readline-sync'),
    fs = require('fs');
  
var booksStr = fs.readFileSync('./books.json', 'utf8'),
    books = JSON.parse(booksStr);
var userStr = fs.readFileSync('./users.json', 'utf8'),
    users = JSON.parse(userStr);

function showLogin(){
    console.log('1. Sign in');
    console.log('2. Sign up');
    console.log('3. Exit');
    var key = readlineSync.question('--> ');
    switch (parseInt(key)){
        case 1:
            signIn();
            break;
        case 2:
            signUp();
            break;
        case 3:
            break;
        default:
            console.log('!!!');
            showLogin();           
    }
}

function checkPass(userName, password){
    var check = users.find(function(data){
        if ((data.user === userName) && (data.password = password)){
            return true;
        }
    });
    if (check){
        return true;
    }
    else {
        return false;
    }
}

function signIn(){
    var userName = readlineSync.question('Name: '),
        password = readlineSync.question('Password: ', {hideEchoBack: true});    
    console.log(checkPass(userName, password), users);
}

function signUp(){
    var userName = readlineSync.question('Name: '),
        password = readlineSync.questionNewPassword('New password:', {
            min: 4, 
            max: 12, 
            confirmMessage: 'Re-enter the password: '
        });
}

showLogin();

function showMenu(){
    console.log('1. Library');
    console.log('2. Borrow books');
    console.log('3. Exit')
}