function initBingo() {

    let {draws, boards} = getInput();
    console.log(solve(draws, boards));
}

function getInput() {

	let input = document.body.innerText.trim().split('\n');
	let draws = input.splice(0, 2).toString().split(',');
	let boards = [];
	let board = [];

	for (let i = 0; i < input.length; i++) {
		if (input[i] === '') {
        		boards.push(board);
            		board = [];
        	} else {
        		board.push(input[i].split(' ').filter((el) => el !== '').map(number => ({number: Number(number), marked: false})))
        		if (i === input.length - 1) boards.push(board);
        	}
	}
	return {draws, boards};
};

function solve(draws, boards) {

	for (let i = 0; i < draws.length; i++) {
        	markBoards(boards, draws[i]);
        	if (boards.length > 1 && i >= 5) {
            		removeWinners(boards);
            		continue;
        	}
		if (isWinner(boards[0])) return calculateScore(boards[0], draws[i]);
    	}
};

function markBoards(boards, draw) {
    
	for (const board of boards) {
        	for (const row of board) {
            		for (const el of row) {
                		if (el.number === Number(draw)) el.marked = true;
            		}
        	}
    	}
};

function isWinner(board) {

    if (checkHorizontal(board) || checkVertical(board)) return true;
    return false;
}

function removeWinners(boards) {
	
	for (let i = 0; i < boards.length; i++) {
        	if (isWinner(boards[i])) boards.splice(i, 1);
    	}
}

function checkHorizontal(board) {
    	
	for (const row of board) {
        	if (row[0].marked && row[1].marked && row[2].marked && row[3].marked && row[4].marked) return true;
    	}
	return false;
};

function checkVertical(board) {
    
	for (let i = 0; i < 5; i++) {
        	if (board[0][i].marked && board[1][i].marked && board[2][i].marked && board[3][i].marked && board[4][i].marked) return true;
    	}
    	return false;
};

function calculateScore(winningBoard, draw) {

	let unmarked = 0;
    	for (const row of winningBoard) {
        	for (const el of row) {
            		if (!el.marked) unmarked += el.number;
        	}
    	}
    	return unmarked * draw;
};

initBingo();
