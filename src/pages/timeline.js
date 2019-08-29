import React from 'react';

function TimeLineItem({ data }) {

    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background: '#018f69' }}>
                    {data.event}
                </span>
                <time>{data.timestamp}</time>
                <p>{data.transaction_id}</p>
                <span className="circle" />
            </div>
        </div>
    );

}

export default TimeLineItem;