import React from 'react';
import {Urls} from '../../consts';
import {useHistory} from 'react-router-dom';

const UserAvatar = () => {
  const history = useHistory();
  return (
    <div className="user-block__avatar" onClick={() => {
      history.push(Urls.MY_LIST);
    }}>
      <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
    </div>
  );
};

export default UserAvatar;
