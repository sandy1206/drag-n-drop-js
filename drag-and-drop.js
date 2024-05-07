document.addEventListener('DOMContentLoaded', () => {
	const draggables = document.querySelectorAll('.draggable');
	const dropzones = document.querySelectorAll('.dropzone');

	draggables.forEach(draggable => {
		draggable.addEventListener('dragstart', (e) => {
			e.dataTransfer.setData('text/plain', e.target.id);
			setTimeout(() => {
				e.target.style.display = 'none';
			}, 0);
		});

		draggable.addEventListener('dragend', (e) => {
			setTimeout(() => {
				e.target.style.display = 'block';
			}, 0);
		});
	});

	dropzones.forEach(dropzone => {
		dropzone.addEventListener('dragover', (e) => {
			e.preventDefault();
			dropzone.classList.add('dragover');
		});

		dropzone.addEventListener('dragleave', (e) => {
			dropzone.classList.remove('dragover');
		});

		dropzone.addEventListener('drop', (e) => {
			e.preventDefault();
			dropzone.classList.remove('dragover');
			const data = e.dataTransfer.getData('text/plain');
			const draggableElement = document.getElementById(data);
			dropzone.appendChild(draggableElement);
		});
	});
});
