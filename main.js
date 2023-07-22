let button = document.querySelector('.button')
const secsionElement = document.querySelector('.main')

const inputElement = document.querySelector('.input')

inputElement.onchange = function(e) {
    const handleDelete = () => { 

        return secsionElement.classList.add('xoa')
    }
    const data = e.target.value
    if(e.target.value === '220222') {
     handleDelete()
    }else if(e.target.value ===''){alert('vui long nhập mật mã')} else{alert('mật khẩu bạn nhập không chính xác ')}
}
