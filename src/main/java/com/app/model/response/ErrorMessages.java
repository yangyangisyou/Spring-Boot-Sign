package com.app.model.response;

public enum ErrorMessages {

	MISSING_REQUIRED_FIELD(""), RECORD_ALREADY_EXISTS(""), INTERNAL_SERVER_ERROR(""), NO_RECORD_FOUND(""),
	AUTHENTICATION_FAILED(""), COULD_NOT_UPDATE_RECORD(""), COULD_NOT_DELETE_RECORD(""), EMAIL_ADDRESS_NOT_VERIFIED("");

	private String errorMessage;

	ErrorMessages(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

}
