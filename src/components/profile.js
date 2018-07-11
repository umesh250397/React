import React from 'react';

const Profile = () => {
  return (
    <div>
        <div class="row">
          <div class="col-md-6">
            <img src="http://via.placeholder.com/400X300" alt="dp">
          </div>
          <div class="col-md-6">
            <div class="row">Name : Example_person</div>
            <div class="row">ID : Example_id</div>
          </div>
        </div>
        <div class="row">
          <blockquote class="blockquote">
            <p class="mb-0">Details of the person as a list</p>
            <div class="row">
              <footer class="blockquote-footer"><div class="col-md-6">KEY :</div><div class="col-md-6"><cite title="Source Title">VALUE</cite></div></footer>
            </div>
            <div class="row">
              <footer class="blockquote-footer">KEY : <cite title="Source Title">VALUE</cite></footer>
            </div>
            <div class="row">
              <footer class="blockquote-footer"><div class="col-md-6">KEY :</div><div class="col-md-6"><cite title="Source Title">VALUE</cite></div></footer>
            </div>
            <div class="row">
              <footer class="blockquote-footer">KEY : <cite title="Source Title">VALUE</cite></footer>
            </div>
            <div class="row">
              <footer class="blockquote-footer">KEY : <cite title="Source Title">VALUE</cite></footer>
            </div>
          </blockquote>
        </div>
    </div>
  );
}

export default Profile;
