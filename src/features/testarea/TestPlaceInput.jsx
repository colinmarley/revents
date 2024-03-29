import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

class TestPlaceInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address: '',
			latlng: {},
		};
	}

	handleChange = address => {
		this.setState({ address });
	};

	handleSelect = address => {
		this.setState({
			address,
		});
		this.props.handleSelect(address);
	};

	render() {
		const { address } = this.state;
		return (
			<PlacesAutocomplete
				value={address}
				onChange={this.handleChange}
				onSelect={this.handleSelect}
			>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<input
							{...getInputProps({
								placeholder: 'Search Places ...',
								className: 'location-search-input',
							})}
						/>
						<div className='autocomplete-dropdown-container'>
							{loading && <div>Loading...</div>}
							{suggestions.map(suggestion => {
								const className = suggestion.active
									? 'suggestion-item--active'
									: 'suggestion-item';
								// inline style for demonstration purpose
								const style = suggestion.active
									? { backgroundColor: '#fafafa', cursor: 'pointer' }
									: { backgroundColor: '#ffffff', cursor: 'pointer' };
								return (
									<div
										{...getSuggestionItemProps(suggestion, {
											className,
											style,
										})}
									>
										<span>{suggestion.description}</span>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</PlacesAutocomplete>
		);
	}
}

export default TestPlaceInput;
