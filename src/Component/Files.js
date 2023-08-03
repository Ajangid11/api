import React from 'react';
import Api from './Api';
import Local from './Local';
import Table from './Table';

function Files () {
  return (
    <div>
        {/* <Api></Api> */}
        <Local></Local>
        <Table></Table>
    </div>
  )
}
export default Files;