'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';

type CellValue = string | null;
const emptyBoard: CellValue[] = Array(9).fill(null);

export default function TicTacToePage() {
  const [board, setBoard] = useState<CellValue[]>(emptyBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [mode, setMode] = useState<'AI' | '2P' | null>(null);
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = useCallback((board: CellValue[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    }
    return null;
  }, []);

  const aiMove = useCallback(() => {
    const emptyIndices = board
      .map((v, i) => (v === null ? i : null))
      .filter((v) => v !== null) as number[];

    if (emptyIndices.length === 0) return;
    const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const newBoard = [...board];
    newBoard[randomIndex] = 'O';
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
    } else if (!newBoard.includes(null)) {
      setWinner('Draw');
    } else {
      setIsXNext(true);
    }
  }, [board, checkWinner]);

  useEffect(() => {
    if (mode === 'AI' && !winner && !isXNext && board.includes(null)) {
      const timeoutId = setTimeout(() => {
        aiMove();
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [isXNext, mode, winner, board, aiMove]);

  const handleClick = (index: number) => {
    if (board[index] || winner || (mode === 'AI' && !isXNext)) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
    } else if (!newBoard.includes(null)) {
      setWinner('Draw');
    } else {
      setIsXNext(!isXNext);
    }
  };

  const resetGame = () => {
    setBoard([...emptyBoard]);
    setIsXNext(true);
    setWinner(null);
  };

  if (!mode) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
      >
        <h1 className="text-4xl font-bold mb-8">Tic Tac Toe</h1>
        <div className="flex gap-6">
          <button onClick={() => setMode('2P')} className="px-6 py-3 bg-green-600 rounded-xl hover:bg-green-700 transition-all">
            2 Player
          </button>
          <button onClick={() => setMode('AI')} className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition-all">
            Play vs AI
          </button>
        </div>
        <Link href="/projects" className="mt-6 text-blue-400 hover:underline text-sm">
          ← Back to Projects
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4"
    >
      <h1 className="text-4xl font-bold mb-4">Tic Tac Toe - {mode}</h1>

      <div className="bg-gray-800 px-6 py-3 rounded-lg shadow-md mb-4 text-center">
        <p className="text-lg">Mode: {mode === 'AI' ? 'Player vs AI' : '2 Player'}</p>
        <p className="text-md">
          {winner
            ? winner === 'Draw'
              ? 'Draw!'
              : `Winner: ${winner}`
            : mode === 'AI'
            ? isXNext
              ? 'Your Turn (X)'
              : 'AI is thinking...'
            : `Turn: ${isXNext ? 'X' : 'O'}`}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 my-4">
        {board.map((value, index) => (
          <motion.button
            key={index}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick(index)}
            className={clsx(
              'w-24 h-24 text-3xl font-bold rounded-lg border-2 transition-transform duration-200',
              'flex items-center justify-center hover:scale-105',
              value === 'X' ? 'text-blue-400' : 'text-pink-400',
              'bg-gray-800 border-gray-700',
              (mode === 'AI' && !isXNext && !value) ? 'cursor-not-allowed' : 'hover:bg-gray-700'
            )}
          >
            {value}
          </motion.button>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <button onClick={resetGame} className="px-4 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition">
          Restart
        </button>
        <button
          onClick={() => {
            setMode(null);
            resetGame();
          }}
          className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
        >
          Back
        </button>
      </div>

      <Link href="/projects" className="mt-6 text-blue-400 hover:underline text-sm">
        ← Back to Projects
      </Link>
    </motion.div>
  );
}
