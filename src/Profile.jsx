import React from 'react';

function Profile(props) {
    const { name, instrument, genre, quote, imageUrl } = props;
    const [ showQuote, setShowQuote ] = React.useState(false);
    const toggleQuote = () => {
        setShowQuote(!showQuote);
    };

  return (
    <div style={{
      maxWidth: '200px',
      padding: '20px',
      border: '1px solid #e3afaf',
      borderRadius: '12px',
      fontFamily: 'Helvetica',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#d35e05',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{genre} {instrument}ist</p>
{/* My favorite part of this project is a friendly little button that flips the boolean.  */}
      <button onClick={toggleQuote} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#8db4dd',
        color: 'white'
      }}>
{/* Modified directly from the review lesson, this ternary operator does the work */}
        {showQuote ? 'Hide Quote' : 'Show Quote'}
      </button>
{/* Before I commented out the .css files, they overrode the more effective use of this button, which just extends it doward cleanly, instead of resizing everything. */}
      {showQuote && <p style={{ marginTop: '16px', fontSize: '14px', color: '#edc582' }}>{quote}
        <br >
        </br> {name}</p>}
    </div>
  );
}

export default Profile;