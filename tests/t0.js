module.exports = {
	'도서대출연장': function(b) {
		b.url('http://gwangjinlib.seoul.kr')
		.frame('SLIMAplus', function(e) {
			console.log(e);
		})
		.element('id', 'UsrID', function(e) {
			console.log('UsrID', e.value);
		})
		.frame(null)
		
	}
};
