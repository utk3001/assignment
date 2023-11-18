import React from 'react'

const Drop = (props) => {
  return (
    <div>
        <div>
            <div>
              <div>Grouping</div>
              <select name="group" value={props.group} onChange={props.handleGroup}>
                <option value="Status" selected>Status</option>
                <option value="User">User</option>
                <option value="Priority">Priority</option>
              </select>
            </div>
            <div>
              <div>Ordering</div>
              <select name="order" value={props.order} onChange={props.handleOrder}>
                <option value="Priority" selected>Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
    </div>
  )
}

export default Drop