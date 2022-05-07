import * as React from 'react';
import Row from './components/row';
import Col from './components/col';

export interface GridProps {}

export interface GridTypes extends React.FC<GridProps> {
  Row: typeof Row;
  Col: typeof Col;
}

export const Grid: GridTypes = () => null;

Grid.Row = Row;
Grid.Col = Col;

export default Grid;
