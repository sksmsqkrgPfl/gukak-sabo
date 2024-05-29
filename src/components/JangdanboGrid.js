import React, { useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './JangdanboGrid.css';

// 소문자로 된 파일 이름 사용
import muSound from '../sounds/mu_sound.mp3';
import cHwangSound from '../sounds/c.hwang_sound.mp3';
import cTaeSound from '../sounds/c.tae_sound.mp3';
import imSound from '../sounds/im_sound.mp3';
import joongSound from '../sounds/joong_sound.mp3';
import cJoongSound from '../sounds/c.joong_sound.mp3';
import cImSound from '../sounds/c.im_sound.mp3';
import cMuSound from '../sounds/c.mu_sound.mp3';

const sounds = {
  joong: joongSound,
  im: imSound,
  mu: muSound,
  c_hwang: cHwangSound,
  c_tae: cTaeSound,
  c_joong: cJoongSound,
  c_im: cImSound,
  c_mu: cMuSound
};

const items = [
  { id: 1, name: '중', type: 'joong', image: '/images/joong.png' },
  { id: 2, name: '임', type: 'im', image: '/images/im.png' },
  { id: 3, name: '무', type: 'mu', image: '/images/mu.png' },
  { id: 4, name: '청황', type: 'c_hwang', image: '/images/c.hwang.png' },
  { id: 5, name: '청태', type: 'c_tae', image: '/images/c.tae.png' },
  { id: 6, name: '청중', type: 'c_joong', image: '/images/c.joong.png' },
  { id: 7, name: '청임', type: 'c_im', image: '/images/c.im.png' },
  { id: 8, name: '청무', type: 'c_mu', image: '/images/c.mu.png' }
];

const GridCell = ({ index, onDrop, items, cellHeight }) => {
  const [, ref] = useDrop({
    accept: 'ITEM',
    drop: (droppedItem) => onDrop(index, droppedItem),
  });

  return (
    <div ref={ref} className="grid-cell" style={{ height: cellHeight }}>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <img
            src={process.env.PUBLIC_URL + item.image}
            alt={item.name}
            style={{
              width: '40px',
              height: '40px',
              position: 'absolute',
              top: `${i * 40}px`,
            }}
          />
          {i < items.length - 1 && (
            <div
              style={{
                position: 'absolute',
                top: `${(i + 1) * 40 - 1}px`,
                left: 0,
                width: '100%',
                height: '1px',
                backgroundColor: 'black',
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const DraggableItem = ({ item }) => {
  const [, ref] = useDrag({
    type: 'ITEM',
    item,
  });

  return (
    <div ref={ref} className="draggable-item">
      <img src={process.env.PUBLIC_URL + item.image} alt={item.name} style={{ width: '40px', height: '40px' }} />
    </div>
  );
};

const JangdanboGrid = () => {
  const [grid, setGrid] = useState(Array(20).fill([])); // 20칸으로 설정
  const [mode, setMode] = useState('1'); // 기본 모드는 '1'

  const handleDrop = (index, item) => {
    const newGrid = [...grid];
    if (mode === '1') {
      newGrid[index] = [item];
    } else {
      if (newGrid[index].length < mode) {
        newGrid[index] = [...newGrid[index], item];
      }
    }
    setGrid(newGrid);
  };

  const playSound = (item, duration) => {
    return new Promise((resolve) => {
      const audio = new Audio(sounds[item.type]);
      audio.currentTime = 0; // 재생을 처음부터 시작
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; // 소리를 처음으로 되돌리기
        resolve();
      }, duration);
    });
  };

  const playAllSounds = async () => {
    for (let column = 4; column >= 0; column--) { // 오른쪽에서 왼쪽으로
      for (let row = 0; row < 5; row++) { // 위에서 아래로
        const index = column * 5 + row;
        if (index < grid.length) {
          const items = grid[index];
          if (items && items.length > 0) {
            const duration = 1000 / items.length;
            for (let item of items) {
              await playSound(item, duration);
            }
          }
        }
      }
    }
  };

  const resetGrid = () => {
    setGrid(Array(20).fill([])); // 20칸으로 설정
  };

  // 모든 칸의 높이를 결정하는 함수
  const getCellHeight = () => {
    let maxItems = 1;
    grid.forEach(items => {
      if (items.length > maxItems) maxItems = items.length;
    });
    return `${40 * maxItems}px`;
  };

  const cellHeight = getCellHeight();

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
          <h1>국악 교육 프로그램</h1>
          <div>
            <button className={mode === '1' ? 'selected' : ''} onClick={() => setMode('1')}>1분박</button>
            <button className={mode === '2' ? 'selected' : ''} onClick={() => setMode('2')}>2분박</button>
            <button className={mode === '3' ? 'selected' : ''} onClick={() => setMode('3')}>3분박</button>
          </div>
          <div className="item-container">
            {items.map((item) => (
              <DraggableItem key={item.id} item={item} />
            ))}
          </div>
          <div className="grid-container">
            {grid.map((items, index) => (
              <GridCell key={index} index={index} items={items} onDrop={handleDrop} cellHeight={cellHeight} />
            ))}
          </div>
          <button onClick={playAllSounds}>재생</button>
          <button onClick={resetGrid}>초기화</button>
        </header>
      </div>
    </DndProvider>
  );
};

export default JangdanboGrid;
