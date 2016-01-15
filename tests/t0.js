module.exports = {
	'도서대출연장': function(b) {
		b.url('http://www.gwangjinlib.seoul.kr/KJL/MyPage/Lend/LnReport.csp?HLOC=KJL&COUNT=38pxeo9q00&Kor=1')
		.setValue('input[name=UsrID]', process.env.b_login_id)
		.setValue('input[name=PWord]', process.env.b_passwd)
		.click('#btn_login')
		.click('form[name=LnReport] span')
		.windowHandles(function(w) {
			var handle = w.value;
			this.switchWindow(handle[1])
			this.resizeWindow(500,500)
			this.click('a');
		})
		.end()
	}
};
