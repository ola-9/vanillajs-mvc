// @ts-nocheck

import onChange from 'on-change';

// BEGIN
export default () => {
  // Model
  const state = {
    lists: {},
  };

  // View
  const watchedState = onChange(state, (path, current, previous) => {
    const currentTab = document.querySelector(`#${current}`);
    const currentPanel = document.querySelector(`[aria-labelledby="${current}"]`);
    const previousTab = document.querySelector(`#${previous}`);
    const previousPanel = document.querySelector(`[aria-labelledby="${previous}"]`);

    currentTab.classList.add('active');
    currentPanel.classList.add('active', 'show');
    previousTab.classList.remove('active');
    previousPanel.classList.remove('active', 'show');
  });

  const lists = document.querySelectorAll('[role="tablist"]');

  // Controller
  lists.forEach((list) => {
    const listId = list.id;
    const activeTab = list.querySelector('[role="tab"].active');

    state.lists[listId] = {
      tabId: activeTab.id,
    };

    list.addEventListener('click', (e) => {
      e.preventDefault();
      watchedState.lists[listId].tabId = e.target.id;
    });
  });
};
// END
