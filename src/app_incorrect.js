import onChange from 'on-change';

const app = () => {
  const state = {
    activeList: null,
    activeText: null,
  }

  const watchedState = onChange(state, (path, current, previousValue) => { // слушаем изменение текущего листа, убираем старых активных и назначаем новых в соотв с состоянием

    if (state.activeText !== null && state.activeText.isSameNode(current)) {
      console.log(current, 'WAS', previousValue)
      const oldActiveList = state.activeList.parentElement.querySelector('.active')
      const oldActiveText = state.activeText.parentElement.querySelector('.active.show')
      console.log('OLD LIST', oldActiveList.innerHTML)
      console.log('NEW LIST', state.activeList.innerHTML)
      console.log('OLD TEXT', oldActiveText.innerHTML)
      console.log('NEW TEXT', state.activeText.innerHTML)
      oldActiveList.classList.remove('active')
      oldActiveText.classList.remove('active', 'show')
      state.activeList.classList.add('active')
      state.activeText.classList.add('active', 'show')
    }

  });

  const listGroups = document.querySelectorAll('.list-group'); // get all group-lists

  listGroups.forEach((listGroup) => {
    listGroup.addEventListener('click', (e) => { // click event on any group button
      e.preventDefault();
      watchedState.activeList = e.target; // actuve list = current clicked
      watchedState.activeText = document.querySelector(`[aria-labelledby="${watchedState.activeList.id}"]`); // aria-labelledby of text === id of selected list, finding selected text
      // console.log(watchedState.listGroupId, '\n', watchedState.activeList.textContent, '\n', watchedState.activeText.textContent);
    });
  });
};

export default app;
