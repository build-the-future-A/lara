const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		const titleEl = document.querySelector('.content');
		const descrEl = document.querySelector('.description');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

				titleEl.textContent = data[attr].content;
				descrEl.textContent = data[attr].description;
			});
		});
		
		var data = {
			  "english": 
			  {
			    "content": "",
			    "description": 
				    "."
			  },
			  "ruseren": 
			  {
			    "content": "",
			    "description": 
				    "."
			  },
			  "Ара́б": 
			  {
			    "content": "",
			    "description": 
				   "."
			  }
			}
	