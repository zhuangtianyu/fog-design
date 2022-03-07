export const POPUP_DEFAULT_MARGIN = 4;

export const ARROW_MARGIN = 12;

export const PLACEMENT_MAP = {
  topLeft: {
    arrowStyle: { left: 16, bottom: -4 },
    arrowDirection: 'bottom',
    transformOrigin: 'left bottom',
  },
  top: {
    arrowStyle: { left: 0, bottom: -4, right: 0, margin: 'auto' },
    arrowDirection: 'bottom',
    transformOrigin: 'center bottom',
  },
  topRight: {
    arrowStyle: { right: 16, bottom: -4 },
    arrowDirection: 'bottom',
    transformOrigin: 'right bottom',
  },
  leftTop: {
    arrowStyle: { top: 12, right: -4 },
    arrowDirection: 'right',
    transformOrigin: 'right top',
  },
  left: {
    arrowStyle: { top: 0, right: -4, bottom: 0, margin: 'auto' },
    arrowDirection: 'right',
    transformOrigin: 'right center',
  },
  leftBottom: {
    arrowStyle: { bottom: 12, right: -4 },
    arrowDirection: 'right',
    transformOrigin: 'right bottom',
  },
  rightTop: {
    arrowStyle: { top: 12, left: -4 },
    arrowDirection: 'left',
    transformOrigin: 'left top',
  },
  right: {
    arrowStyle: { top: 0, left: -4, bottom: 0, margin: 'auto' },
    arrowDirection: 'left',
    transformOrigin: 'left center',
  },
  rightBottom: {
    arrowStyle: { bottom: 12, left: -4 },
    arrowDirection: 'left',
    transformOrigin: 'left bottom',
  },
  bottomLeft: {
    arrowStyle: { left: 16, top: -4 },
    arrowDirection: 'top',
    transformOrigin: 'left top',
  },
  bottom: {
    arrowStyle: { left: 0, top: -4, right: 0, margin: 'auto' },
    arrowDirection: 'top',
    transformOrigin: 'center top',
  },
  bottomRight: {
    arrowStyle: { right: 16, top: -4 },
    arrowDirection: 'top',
    transformOrigin: 'right top',
  },
};
