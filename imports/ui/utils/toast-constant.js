import Vue from 'vue';

export const toast_constants = {
	position: 'top-right',
};

export const ToastContainer = (message, type, position = 'top-right') => {
	Vue.$toast.open({
		message: message,
		type: type,
		position: position,
	});
};
