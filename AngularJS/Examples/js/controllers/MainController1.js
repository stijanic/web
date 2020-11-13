app.controller('MainController1', ['$scope', function($scope) { 
  $scope.title = 'My Own Top Sellers in Books';
  $scope.promo = 'My Promo';
  $scope.products = [
	  {
	    name: 'The Book of Trees',
	    price: 19,
	    pubdate: new Date('2014', '03', '08'),
	    cover: 'img/the-book-of-trees.jpg',
	    likes: 0,
	    dislikes: 0
	  },
	  {
	    name: 'Program or be Programmed',
	    price: 8,
	    pubdate: new Date('2013', '08', '01'),
	    cover: 'img/program-or-be-programmed.jpg',
	    likes: 0,
	    dislikes: 0
	  },
	  {
	    name: 'My preffered one',
	    price: 8,
	    pubdate: new Date('2013', '08', '01'),
	    likes: 0,
	    dislikes: 0
	    //cover: 'img/program-or-be-programmed.jpg'
	  },
	  {
	    name: 'My preffered one firesback',
	    price: 8,
	    pubdate: new Date('2013', '08', '01'),
	    likes: 0,
	    dislikes: 0
	    //cover: 'img/program-or-be-programmed.jpg'
	  }
	];
	$scope.plusOne = function(index) { 
  		$scope.products[index].likes += 1; 
	};
	$scope.minusOne = function(index) { 
  		$scope.products[index].dislikes += 1; 
	};
}]);