## NAMESERVER04: Same source address

### Test case identifier
**NAMESERVER04** Same source address

### Objective

Responses from the authoritative name servers must contain same source IP
address as the destination IP address of the initial query. This has been
clarified in section 4 of
[RFC 2181](https://tools.ietf.org/html/rfc2181#section-4).

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case
1. Retrieve all address records for all the name servers using [Method 
   4](../Methods.md) and [Method 5](../Methods.md).
2. A SOA query for the domain name sent to the each name server IP address 
   found in step 1.
3. Any answer received from the SOA query must come from the same source IP address
   as the query was sent to. If there is a mismatch, this test case fails.

### Outcome(s)

The outcome of this test case is the severity of the most severe log
message emitted during its execution.

| Log message identifier             | Description    |
|:-----------------------------------|:---------------|
| NAMESERVER:DEL_DIFFERENT_SOURCE_IP | Some response had a source IP that was different from the target IP of the query. |
| ...                                | |


### Special procedural requirements

If there are many authoritative DNS nodes behind the IP adress the query
is sent to, there could be multiple answers with possibly different source
addresses for the query. This special case is currently ignored.

### Intercase dependencies

None.

-------

Copyright (c) 2013, 2014, 2015, IIS (The Internet Infrastructure Foundation)  
Copyright (c) 2013, 2014, 2015, AFNIC  
Creative Commons Attribution 4.0 International License

You should have received a copy of the license along with this
work.  If not, see <https://creativecommons.org/licenses/by/4.0/>.
